import { ParceledArticleData } from "./data.js";
import { Comment } from "../comment/index.js";
import { SessionError } from "../errors/index.js";
class Article {
    session;
    parceledData;
    /** @property {boolean} 이 Article이 실제로 로드되었는지를 나타냄. 이 Article에 대한 수정 fetch가 보내진 경우 dirty flag의 역할도 겸함. 해당 사항은 수정예정. */
    isLoaded;
    get data() {
        return this.parceledData.unparcel();
    }
    set data(newData) {
        this.parceledData.parcel(newData);
    }
    get articleId() {
        return this.data.articleId;
    }
    get url() {
        return this.data.url;
    }
    /**
     * 새 게시글 객체 Article을 만든다.
     * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
     *
     * @param {RequestSession} session 세션
     * @param {ArticleData} data 게시글 정보
     */
    constructor(session, data) {
        this.session = session;
        const parcel = { ...data };
        if (!parcel.articleId) {
            const articleIdString = parcel.url.pathname.match(/^\/b\/[^/]+\/(\d+)/)[1];
            parcel.articleId = +articleIdString;
        }
        this.parceledData = new ParceledArticleData(parcel);
        this.isLoaded = false;
    }
    /**
     * 해당 게시글을 fetch한다.
     * 만일 이미 읽어온 게시글일 경우, fetch 없이 정보를 그대로 반환한다.
     *
     * @param {ArticleReadOption} options 게시글 읽기 옵션
     * @returns {Promise<ArticleData>} 해당 게시글의 articleData 사본
     */
    async read(options = { noCache: false, withComments: true }) {
        if (!options.noCache && this.isLoaded) {
            return this.data;
        }
        const newArticleData = {
            articleId: this.articleId,
            url: this.url,
        };
        const article = await this.session
            ._fetch(this.url)
            .then((resp) => resp.parse());
        const articleTitle = article.querySelector(".article-wrapper .title");
        const memberInfo = article.querySelector(".member-info");
        const articleInfo = article.querySelector(".article-info");
        const badge = articleTitle.querySelector("span.badge");
        const [rateUp, rateDown, commentCount, views, time] = articleInfo.querySelectorAll(".body");
        if (badge !== null) {
            newArticleData.category = badge.innerText;
            newArticleData.title = articleTitle.innerText.replace(newArticleData.category, "");
        }
        else {
            newArticleData.category = undefined;
            newArticleData.title = articleTitle.innerText;
        }
        newArticleData.title = newArticleData.title.replace(/\n/g, "");
        // Not using firstChild because of Node <-> HTMLElement type casting problem.
        newArticleData.author = memberInfo
            .querySelector(".user-info")
            .querySelector("*").attributes["data-filter"];
        newArticleData.time = new Date(time.querySelector("time").attributes["datetime"]);
        newArticleData.views = +views.innerText;
        newArticleData.commentCount = +commentCount.innerText;
        newArticleData.rate = [+rateUp.innerText, +rateDown.innerText];
        newArticleData.rateDiff = newArticleData.rate[0] - newArticleData.rate[1];
        newArticleData.content = article.querySelector(".article-wrapper .article-body .article-content").innerHTML;
        if (options.withComments) {
            newArticleData.comments = [];
            const commentLink = article.querySelector(".article-comment .page-item.active a");
            const lastCommentPage = +(commentLink?.innerText ?? 1);
            for (let i = lastCommentPage; i >= 1; i--) {
                const commentPage = await this.session
                    ._fetch(`${this.url}?cp=${i}`)
                    .then((resp) => resp.parse());
                const comments = commentPage.querySelectorAll(".comment-wrapper");
                newArticleData.comments.push(...comments.map((comment) => {
                    const userInfo = comment.querySelector("span.user-info");
                    const userLink = (userInfo.querySelector("a") ||
                        userInfo.querySelector("span"));
                    const message = comment.querySelector(".message");
                    const content = comment.querySelector("div").innerHTML;
                    let textContent;
                    const emoticonWrapper = message.querySelector(".emoticon-wrapper");
                    if (emoticonWrapper) {
                        textContent =
                            (emoticonWrapper.attributes["src"] ||
                                emoticonWrapper.childNodes.find((e) => e.rawAttrs)?.attributes["src"]) ??
                                "";
                    }
                    else {
                        textContent =
                            message.querySelector(".text pre")?.textContent ?? "";
                    }
                    const commentIdString = (comment.id
                        ? comment.id.match(/(\d+)$/)
                        : comment.childNodes
                            .find((e) => e.id)
                            .id.match(/(\d+)$/))[1];
                    return new Comment(this.session, {
                        commentId: +commentIdString,
                        url: new URL(`${this.url}#c_${commentIdString}`),
                        apiUrl: new URL(`${this.url}#/${commentIdString}`),
                        author: userLink.attributes["data-filter"],
                        content,
                        textContent,
                        time: new Date(comment.querySelector("time").attributes["datetime"]),
                        deleted: comment.querySelector(".deleted") ? true : false,
                    });
                }));
            }
        }
        this.isLoaded = true;
        this.data = newArticleData;
        return this.data;
    }
    /**
     * 해당 게시글을 삭제한다.
     *
     * @returns {Promise<Response>} 삭제 fetch에 대한 Response
     */
    async delete() {
        const body = new URLSearchParams();
        if (this.session.isAnonymous) {
            body.append("password", this.session.password);
        }
        return await this.session._fetch(`${this.url}/delete`, {
            method: "POST",
            body: body,
            csrfRequired: true,
        });
    }
    /**
     * 해당 게시글을 수정한다.
     *
     * @param {ArticlePostOption} article 수정될 내용(지정되지 않은 property는 현재의 값을 그대로 가지고 감)
     * @returns {Promise<RequestResponse>} 수정 fetch에 대한 Response
     */
    async edit(article = {
        title: "",
        content: "",
    }) {
        if (this.session.isAnonymous) {
            article.anonymous = true;
            article.nickname = article.nickname ?? this.session.username;
            article.password = article.password ?? this.session.password;
        }
        article.category = article.category ?? this.data.category;
        article.title = article.title ?? this.data.title;
        article.content = article.content ?? this.data.content ?? "";
        const editPage = await this.session
            ._fetch(`${this.url}/edit`)
            .then((resp) => resp.parse());
        const tokens = {
            csrf: "",
            token: "",
        };
        const inputElements = editPage.querySelectorAll("#article_write_form input");
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
        if (article.category)
            articleInfo.append("category", article.category);
        articleInfo.append("agreePreventDelete", "on");
        articleInfo.append("title", article.title);
        articleInfo.append("content", article.content);
        if (article.anonymous) {
            articleInfo.append("nickname", article.nickname ?? "ㅇㅇ");
            articleInfo.append("password", article.password ?? "0000");
        }
        // Mark as dirty.
        this.isLoaded = false;
        return await this.session._fetch(`${this.url}/edit`, {
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
    async blockUser(duration) {
        const body = new URLSearchParams();
        body.append("until", duration.toString());
        const [boardUrl] = this.url.toString().match(/^.*([/]b[/][^/]+)/);
        return await this.session._fetch(`${boardUrl}/block/article/${this.articleId}`, {
            method: "POST",
            headers: { Referer: this.url.toString() },
            body: body,
        });
    }
    /**
     * 해당 게시글을 볼 수 없는 국가를 설정한다.
     *
     * @param {string[]} countries 제한 국가 목록
     * @returns {Promise<Response>} 국가 제한 fetch에 대한 Response
     */
    async restrictCountry(...countries) {
        const body = new URLSearchParams();
        body.append("restricted_countries[]", "");
        countries.forEach((country) => {
            body.append("restricted_countries[]", country);
        });
        return await this.session._fetch(`${this.url}/config`, {
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
    async writeComment(comment) {
        if (this.session.isAnonymous) {
            throw new SessionError("This is an anonymous session(anonymous session requires reCAPTCHA auth).");
        }
        const body = new URLSearchParams();
        body.append("contentType", "text");
        body.append("content", comment);
        const response = await this.session._fetch(`${this.url}/comment`, {
            method: "POST",
            headers: { Referer: this.url.toString() },
            body: body,
            csrfRequired: true,
        });
        this.isLoaded = false;
        return new Comment(this.session, {
            url: new URL(response.url),
            apiUrl: new URL(response.url.replace("#c_", "/")),
        });
    }
    /**
     * 해당 게시글에서 댓글을 삭제한다.
     * 삭제하더라도 articleData에서는 삭제되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
     *
     * @param {number} commentId 댓글 번호
     * @returns {Promise<Response>} 댓글 작성 fetch에 대한 Response
     */
    deleteComment(commentId) {
        const commentObject = this.data.comments[commentId] ??
            new Comment(this.session, {
                commentId: commentId,
                url: new URL(`${this.url}#c_${commentId}`),
                apiUrl: new URL(`${this.url}/${commentId}`),
            });
        this.isLoaded = false;
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
    editComment(commentId, comment) {
        const commentObject = this.data.comments[commentId] ??
            new Comment(this.session, {
                commentId: commentId,
                url: new URL(`${this.url}#c_${commentId}`),
                apiUrl: new URL(`${this.url}/${commentId}`),
            });
        this.isLoaded = false;
        return commentObject.edit(comment);
    }
}
export { Article };
//# sourceMappingURL=article.js.map