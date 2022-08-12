import { Comment } from "../comment/comment";
import { ArgumentError, SessionError } from "../errors";

import type { Board } from "../board";
import type { RequestSession } from "../request";
import type { RequestResponse } from "../request";
import { ArticleData, ParceledArticleData } from "./data";
import type { ArticleReadOption, ArticlePostOption } from "./options";

class Article {
  _session: RequestSession;
  _board: Board;
  _articleData: ParceledArticleData;

  /** @property {boolean} 이 Article이 실제로 로드되었는지를 나타냄. 이 Article에 대한 수정 fetch가 보내진 경우 dirty flag의 역할도 겸함. 해당 사항은 수정예정. */
  _loaded: boolean = false;

  articleId: number;
  url: URL;

  /**
   * 새 게시글 객체 Article을 만든다.
   * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
   *
   * @param {Board} board 해당 게시글이 속해 있는 게시판 객체
   * @param {ArticleData} articleData 게시글 정보
   */
  constructor(board: Board, articleData: ArticleData) {
    this._session = board._session;
    this._board = board;

    if (articleData.articleId) {
      this.articleId = articleData.articleId;
      this.url = new URL(`${board.url}/${articleData.articleId}`);
    } else if (articleData.url) {
      const articleIdString =
        articleData.url.pathname.match(/^\/b\/[^/]+\/(\d+)/);
      this.articleId = +articleIdString!;

      this.url = articleData.url;
    } else {
      throw new ArgumentError(
        "at least one of { articleId, url } must have specified"
      );
    }

    this._loaded = false;

    if (articleData instanceof ParceledArticleData) {
      this._articleData = articleData;
    } else {
      this._articleData = new ParceledArticleData();
      Object.assign(this._articleData._data, articleData);
    }
  }

  /**
   * 해당 게시글을 fetch한다.
   * 만일 이미 읽어온 게시글일 경우, fetch 없이 정보를 그대로 반환한다.
   *
   * @param {ArticleReadOption} options 게시글 읽기 옵션
   * @returns {Promise<ArticleData>} 해당 게시글의 articleData 사본
   */
  async read(
    options: ArticleReadOption = { noCache: false, withComments: true }
  ): Promise<ArticleData> {
    if (options.noCache || !this._loaded || !this._articleData) {
      const article = await this._session
        ._fetch(`${this._board.url}/${this.articleId}`)
        .then((resp) => resp.parse())!;

      const articleTitle = article.querySelector(".article-wrapper .title")!;
      const memberInfo = article.querySelector(".member-info")!;
      const articleInfo = article.querySelector(".article-info")!;
      const badge = articleTitle.querySelector("span.badge");

      const [rateUp, rateDown, commentCount, views, time] =
        articleInfo.querySelectorAll(".body");

      const newArticleData: ArticleData = {};

      if (badge !== null) {
        newArticleData.category = badge.innerText;
        newArticleData.title = articleTitle.innerText.replace(
          newArticleData.category,
          ""
        );
      } else {
        newArticleData.category = undefined;
        newArticleData.title = articleTitle.innerText;
      }

      newArticleData.title = newArticleData.title.replace(/\n/g, "");

      // Not using firstChild because of Node <-> HTMLElement type casting problem.
      newArticleData.author = memberInfo
        .querySelector(".user-info")
        ?.querySelector("*")!.attributes["data-filter"];

      newArticleData.time = new Date(
        time.querySelector("time")!.attributes["datetime"]
      );
      newArticleData.views = +views.innerText;
      newArticleData.commentCount = +commentCount.innerText;
      newArticleData.rate = [+rateUp.innerText, +rateDown.innerText];
      newArticleData.rateDiff = newArticleData.rate[0] - newArticleData.rate[1];

      newArticleData.content = article.querySelector(
        ".article-wrapper .article-body .article-content"
      )!.innerHTML;

      if (options.withComments) {
        newArticleData.comments = [];

        const commentLink = article.querySelector(
          ".article-comment .page-item.active a"
        );
        const lastCommentPage = commentLink ? +commentLink.innerText : 1;
        for (let i = lastCommentPage; i >= 1; i--) {
          const commentPage = await this._session
            ._fetch(`${this._board.url}/${this.articleId}?cp=${i}`)
            .then((resp) => resp.parse());
          const comments = commentPage.querySelectorAll(".comment-wrapper");

          newArticleData.comments.push(
            ...comments.map((comment) => {
              const userInfo = comment.querySelector("span.user-info")!;

              const userLink = (userInfo.querySelector("a") ||
                userInfo.querySelector("span"))!;

              const message = comment.querySelector(".message")!;

              const content = comment.querySelector("div")!.innerHTML;
              let textContent: string;

              const emoticonWrapper =
                message.querySelector(".emoticon-wrapper");
              if (emoticonWrapper) {
                textContent =
                  (emoticonWrapper.attributes["src"] ||
                    // Not using childNodes because of Node <-> HTMLElement type casting problem.
                    emoticonWrapper
                      .querySelectorAll("*")
                      .find((e) => e.rawAttrs)?.attributes["src"]) ??
                  "";
              } else {
                textContent =
                  message.querySelector(".text pre")?.textContent ?? "";
              }

              const commentIdString = (
                comment.id
                  ? comment.id.match(/(\d+)$/)
                  : comment
                      .querySelectorAll("*")
                      ?.find((e) => e.id)
                      ?.id.match(/(\d+)$/)
              )![1];

              return new Comment(this, {
                commentId: +commentIdString,
                author: userLink.attributes["data-filter"],
                content,
                textContent,
                time: new Date(
                  comment.querySelector("time")!.attributes["datetime"]
                ),
                deleted: comment.querySelector(".deleted") ? true : false,
              });
            })
          );
        }
      }

      this._loaded = true;
      this._articleData = new ParceledArticleData(newArticleData);
    }

    return this._articleData.data;
  }

  /**
   * 해당 게시글을 삭제한다.
   *
   * @returns {Promise<Response>} 삭제 fetch에 대한 Response
   */
  async delete(): Promise<RequestResponse> {
    const body = new URLSearchParams();

    if (this._session._anonymous) {
      body.append("password", this._session._password);
    }

    return await this._session._fetch(
      `${this._board.url}/${this.articleId}/delete`,
      {
        method: "POST",
        body: body,
        csrfRequired: true,
      }
    );
  }

  /**
   * 해당 게시글을 수정한다.
   *
   * @param {ArticlePostOption} article 수정될 내용(지정되지 않은 property는 현재의 값을 그대로 가지고 감)
   * @returns {Promise<RequestResponse>} 수정 fetch에 대한 Response
   */
  async edit(
    article: ArticlePostOption = {
      title: "",
      content: "",
    }
  ): Promise<RequestResponse> {
    if (this._session._anonymous) {
      article.anonymous = true;
      article.nickname = article.nickname ?? this._session._username;
      article.password = article.password ?? this._session._password;
    }

    article.category = article.category ?? this._articleData.data.category;
    article.title = article.title ?? this._articleData.data.title;
    article.content = article.content ?? this._articleData.data.content ?? "";

    const editPage = await this._session
      ._fetch(`${this.url}/edit`)
      .then((resp) => resp.parse());

    const tokens = {
      csrf: "",
      token: "",
    };

    const inputElements = editPage.querySelectorAll(
      "#article_write_form input"
    );
    for (const key in inputElements) {
      if (inputElements[key].attributes["name"] == "_csrf") {
        tokens.csrf = inputElements[key].attributes["value"];
      }
      if (inputElements[key].attributes["name"] == "token") {
        tokens.token = inputElements[key].attributes["value"];
      }
    }

    const articleInfo = new URLSearchParams();
    articleInfo.append("_csrf", tokens.csrf);
    articleInfo.append("token", tokens.token);
    articleInfo.append("contentType", "html");
    if (article.category) articleInfo.append("category", article.category);
    articleInfo.append("agreePreventDelete", "on");
    articleInfo.append("title", article.title!);
    articleInfo.append("content", article.content);

    if (article.anonymous) {
      articleInfo.append("nickname", article.nickname ?? "ㅇㅇ");
      articleInfo.append("password", article.password ?? "0000");
    }

    // Mark as dirty.
    this._loaded = false;

    return await this._session._fetch(`${this.url}/edit`, {
      method: "POST",
      headers: { referer: `${this.url}/write` },
      body: articleInfo,
    });
  }

  /**
   * 해당 게시글의 작성자를 차단한다.
   *
   * @param {number} duration 차단 기간(단위 : 초)
   * @returns {Promise<Response>} 차단 fetch에 대한 Response
   */
  async blockUser(duration: number): Promise<RequestResponse> {
    const body = new URLSearchParams();
    body.append("until", duration.toString());

    return await this._session._fetch(
      `${this._board.url}/block/article/${this.articleId}`,
      {
        method: "POST",
        headers: { Referer: this.url.toString() },
        body: body,
      }
    );
  }

  /**
   * 해당 게시글을 볼 수 없는 국가를 설정한다.
   *
   * @param {string[]} countries 제한 국가 목록
   * @returns {Promise<Response>} 국가 제한 fetch에 대한 Response
   */
  async restrictCountry(...countries: string[]): Promise<RequestResponse> {
    const body = new URLSearchParams();
    body.append("restricted_countries[]", "");
    countries.forEach((country) => {
      body.append("restricted_countries[]", country);
    });

    return await this._session._fetch(`${this.url}/config`, {
      method: "POST",
      headers: { Referer: this.url.toString() },
      body: body,
      csrfRequired: true,
    });
  }

  /**
   * 해당 게시글에 새 댓글을 작성한다.
   * 작성하더라도 articleData에는 추가되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
   *
   * @param {string} comment 댓글 내용(HTML)
   * @returns {Promise<Comment>} 댓글 작성 fetch에 대한 Response
   */
  async writeComment(comment: string): Promise<Comment> {
    if (this._session._anonymous) {
      throw new SessionError(
        "This is an anonymous session(anonymous session requires reCAPTCHA auth)."
      );
    }

    const body = new URLSearchParams();
    body.append("contentType", "text");
    body.append("content", comment);

    const response = await this._session._fetch(`${this.url}/comment`, {
      method: "POST",
      headers: { Referer: this.url.toString() },
      body: body,
      csrfRequired: true,
    });

    return new Comment(this, {
      url: new URL(response.url),
    });
  }

  /**
   * 해당 게시글에서 댓글을 삭제한다.
   * 삭제하더라도 articleData에서는 삭제되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
   *
   * @param {number} commentId 댓글 번호
   * @returns {Promise<Response>} 댓글 작성 fetch에 대한 Response
   */
  deleteComment(commentId: number): Promise<RequestResponse> {
    const commentObject =
      this._articleData.data.comments![commentId] ??
      new Comment(this, {
        commentId: commentId,
      });

    return commentObject.delete();
  }

  /**
   * 해당 게시글에 작성된 댓글을 수정한다.
   * 수정하더라도 articleData에는 수정되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
   *
   * @param {number} commentId 댓글 번호
   * @param {string} comment 댓글 내용(HTML)
   * @returns {Promise<Response>} 댓글 수정 fetch에 대한 Response
   */
  editComment(commentId: number, comment: string): Promise<RequestResponse> {
    const commentObject =
      this._articleData.data.comments![commentId] ??
      new Comment(this, {
        commentId: commentId,
      });

    return commentObject.edit(comment);
  }
}
export { Article };
