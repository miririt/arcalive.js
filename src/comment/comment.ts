import type { Article } from "../article/index.js";
import type { RequestSession } from "../request/index.js";

import { ArgumentError } from "../errors/index.js";
import { RequestResponse } from "../request/index.js";

import type { CommentData } from "./data.js";
import { ParceledCommentData } from "./data.js";

class Comment {
  commentId: number;
  apiUrl: URL;
  url: URL;
  /** @type {RequestSession} */
  _session: RequestSession;
  /** @type {Article} */
  _article: Article;
  /** @type {ParceledCommentData} */
  _parceledData: ParceledCommentData;

  get data(): CommentData {
    return this._parceledData.unparcel();
  }

  set data(newData: CommentData) {
    this._parceledData.parcel(newData);
  }

  /**
   * 새 댓글 객체 Comment를 만든다.
   * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
   *
   * @param {Article} article 해당 댓글이 속해있는 게시글 객체
   * @param {CommentData} commentData 댓글 정보
   */
  constructor(article: Article, commentData: CommentData) {
    this._session = article._session;
    this._article = article;
    this._parceledData = new ParceledCommentData(commentData);

    if (commentData.commentId) {
      this.commentId = commentData.commentId;
      this.apiUrl = new URL(`${this._article.url}/${this.commentId}`);
      this.url = new URL(`${this._article.url}#c_${this.commentId}`);
    } else if (commentData.apiUrl) {
      this.commentId = +commentData.apiUrl.pathname.match(
        /^\/b\/[^/]+\/\d+\/(\d+)/
      )![1];
      this.apiUrl = commentData.apiUrl;
      this.url = new URL(`${this._article.url}#c_${this.commentId}`);
    } else if (commentData.url) {
      this.commentId = +commentData.url.hash.match(/^#c_(\d+)/)![1];
      this.apiUrl = new URL(`${this._article.url}/${this.commentId}`);
      this.url = commentData.url;
    } else {
      throw new ArgumentError(
        "at least one of { commentId, apiUrl, url } must have specified"
      );
    }
  }

  /**
   * 해당 댓글을 읽는다.
   *
   * @returns {CommentData} 댓글 정보
   */
  read(): CommentData {
    return this.data;
  }

  /**
   * 해당 댓글을 삭제한다.
   *
   * @returns {Promise<RequestResponse>} 댓글 삭제 fetch에 대한 Response
   */
  async delete(): Promise<RequestResponse> {
    if (this.data.deleted) {
      throw new Error("This comment is already deleted");
    }

    const body = new URLSearchParams();

    if (this._session._anonymous) {
      body.append("password", this._session._password);
    }

    return await this._session._fetch(`${this.apiUrl}/delete`, {
      method: "POST",
      body: body,
      csrfRequired: true,
    });
  }

  /**
   * 해당 댓글을 수정한다.
   *
   * @param {string} content 댓글 내용(HTML)
   * @returns {Promise<RequestResponse>} 댓글 수정 fetch에 대한 Response
   */
  async edit(content: string): Promise<RequestResponse> {
    const body = new URLSearchParams();

    if (this.data.deleted) {
      throw new Error("This comment is already deleted");
    }

    if (this._session._anonymous) {
      body.append("password", this._session._password);
    }

    body.append("contentType", "text");
    body.append("content", content);

    return await this._session._fetch(`${this.apiUrl}/edit`, {
      method: "POST",
      headers: { Referer: this.url.toString() },
      body: body,
      csrfRequired: true,
    });
  }
}

export { Comment };
