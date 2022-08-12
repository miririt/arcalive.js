"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const article_1 = require("../article");
class Board {
    /** @type {number} 새 인스턴스 생성 시 사용할 기본 캐시 사이즈 */
    static _cacheSize = 64;
    /** @property {RequestSession} 요청 시 사용하는 세션 */
    _session;
    /** @property {URL} 게시판 URL */
    url;
    /** @property {number} 게시판 내 캐시할 게시글 개수 */
    _cacheSize = 64;
    /** @property {object<number,Article>} 캐시된 게시글들 */
    _cachedArticles = new Map();
    /** @property {number[]} 캐시된 게시글의 우선순위(LRU) */
    _cachedOrder = [];
    /**
     * 새 게시판 객체 Board를 만든다.
     * 생성시에는 게시판의 존재 여부를 확인하지 않는다(Rate Limit때문).
     *
     * @param {RequestSession} session 게시판을 열람할 세션
     * @param {BoardData} boardData 게시판 정보
     */
    constructor(session, boardData) {
        this._session = session;
        this.url = boardData.url;
        this._cacheSize = Board._cacheSize || 64;
    }
    /**
     * Board의 기본 캐시 사이즈
     */
    static get defaultCacheSize() {
        return this._cacheSize;
    }
    /**
     * Board 객체의 캐시 사이즈
     */
    get articleCacheSize() {
        return this._cacheSize;
    }
    /**
     * Board의 기본 캐시 사이즈를 설정한다.
     * 이미 생성된 객체에는 효과가 없다.
     *
     * @param {number} newSize 새 캐시 사이즈
     */
    static set defaultCacheSize(newSize) {
        if (newSize < 0)
            return;
        this._cacheSize = newSize;
    }
    /**
     * Board 객체의 캐시 사이즈를 설정한다.
     *
     * @param {number} newSize 새 캐시 사이즈
     */
    set articleCacheSize(newSize) {
        if (newSize < 0)
            return;
        this._cacheSize = newSize;
    }
    /**
     * 해당 번호의 Article 객체를 얻어온다.
     * 만일 캐시된 Article 객체가 지나치게 많을 경우 캐시를 정리한다.
     *
     * @param {number} articleId 게시글 번호
     * @returns {Article} 해당 번호의 게시글을 나타내는 Article 객체
     */
    getArticle(articleId) {
        if (Object.keys(this._cachedArticles).length > this._cacheSize) {
            const lastUsed = this._cachedOrder.shift();
            if (lastUsed)
                this._cachedArticles.delete(lastUsed);
        }
        const cachedIndex = this._cachedOrder.indexOf(articleId);
        if (cachedIndex !== -1) {
            this._cachedOrder.splice(cachedIndex, 1);
        }
        this._cachedOrder.push(articleId);
        if (!this._cachedArticles.has(articleId)) {
            this._cachedArticles.set(articleId, new article_1.Article(this, { articleId }));
        }
        return this._cachedArticles.get(articleId);
    }
    /**
     * 해당 게시판에 있는 게시글의 객체 Article을 읽는다.
     * 존재하지 않을 경우 실패한다.
     *
     * @param {number} articleId 게시글 번호
     * @param {Article.ArticleReadOption} options 게시글 읽기 옵션
     * @returns {Promise<ArticleData>} 해당 번호의 게시글을 나타내는 Article 객체
     */
    async readArticle(articleId, options = { noCache: false, withComments: true }) {
        const articleObject = this.getArticle(articleId);
        return articleObject.read(options);
    }
    /**
     * 해당 게시판에 새 글을 작성한다.
     *
     * @param {Article.ArticlePostOption} article 게시글 내용
     * @returns {Promise<Article>} 작성된 게시글 객체에 대한 Promise
     */
    async writeArticle(article) {
        if (this._session._anonymous) {
            throw new TypeError("This is an anonymous session(anonymous session requires reCAPTCHA auth).");
        }
        const writePage = await this._session
            ._fetch(`${this.url}/write`)
            .then((resp) => resp.parse());
        const tokens = {
            csrf: "",
            token: "",
        };
        const inputElements = writePage.querySelectorAll("#article_write_form input");
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
        articleInfo.append("content", article.content ?? "");
        const response = await this._session._fetch(`${this.url}/write`, {
            method: "POST",
            headers: { referer: `${this.url}/write` },
            body: articleInfo,
        });
        return new article_1.Article(this, {
            url: new URL(response.url),
        });
    }
    /**
     * 해당 게시판에서 글을 삭제한다.
     *
     * @param {number} articleId 게시글 번호
     * @returns {Promise<RequestResponse>} 게시글 삭제 fetch에 대한 Response
     */
    deleteArticle(articleId) {
        const articleObject = this.getArticle(articleId);
        return articleObject.delete();
    }
    /**
     * 해당 게시판에서 글을 수정한다.
     *
     * @param {number} articleId 게시글 번호
     * @param {ArticlePostOption} article 수정될 내용(지정되지 않은 property는 현재의 값을 그대로 가지고 감)
     * @returns {Promise<RequestResponse>} 게시글 수정 fetch에 대한 Response
     */
    editArticle(articleId, article) {
        const articleObject = this.getArticle(articleId);
        return articleObject.edit(article);
    }
    /**
     * 해당 게시판에서 글을 검색한다.
     *
     * @param {number} page 검색 결과 페이지 번호
     * @param {BoardQueryOption} options 검색 옵션
     * @returns {Promise<Article[]>} 해당 페이지에 있는 게시글 검색 결과를 나타내는 Article[]
     */
    async queryPage(page = 1, options = {}) {
        let queryUrl = `${this.url}`;
        queryUrl += `?p=${page}`;
        if (options.queryTarget && options.queryString) {
            queryUrl += `&target=${options.queryTarget}&keyword=${options.queryString}`;
        }
        if (options.category) {
            queryUrl += `&category=${options.category}`;
        }
        const boardPage = await this._session
            ._fetch(queryUrl)
            .then((resp) => resp.parse());
        const articles = boardPage.querySelectorAll(".article-list a.vrow");
        let filteredArticles = articles.filter((article) => article.classNames.indexOf("notice-unfilter") === -1);
        if (!options.withNotices) {
            filteredArticles = articles.filter((article) => article.classNames.indexOf("notice") === -1);
        }
        return filteredArticles.map((articleElem) => {
            const articleData = {
                isSummary: true,
            };
            const commentElement = articleElem.querySelector(".comment-count");
            articleData.articleId =
                +articleElem.attributes["href"].match(/(\d+)[?]p=(\d+)$/)[1];
            articleData.author = articleElem
                .querySelector(".user-info")
                .querySelector("*").attributes["data-filter"];
            articleData.isNotice = articleElem.classNames.indexOf("notice") !== -1;
            articleData.category = articleElem.querySelector(".badge").innerText;
            articleData.title = articleElem
                .querySelector(".title")
                .innerText.replace(/\n/g, "");
            articleData.time = new Date(articleElem.querySelector(".col-time time").attributes["datetime"]);
            articleData.views = +articleElem.querySelector(".col-view").innerText;
            articleData.commentCount = commentElement
                ? +commentElement.innerText.match(/\d+/)[0]
                : 0;
            articleData.rateDiff = +articleElem.querySelector(".col-rate").innerText;
            return new article_1.Article(this, articleData);
        });
    }
    /**
     * 해당 게시판의 페이지를 얻어온다.
     * 내부적으로 queryPage를 호출한다.
     *
     * @param {number} page 페이지 번호
     * @param {BoardReadOption} options 검색 옵션
     * @returns {Promise<Article[]>} 해당 게시글 분류의 해당 페이지에 있는 게시글을 나타내는 Article[]
     */
    readPage(page, options = { withNotices: false, category: undefined }) {
        return this.queryPage(page, options);
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map