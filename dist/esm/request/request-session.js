import { Headers } from "node-fetch";
import fq from "./fetch-queue.js";
import { Board } from "../board/board.js";
import { Article } from "../article/index.js";
import { ArgumentError, RequestError } from "../errors/index.js";
import { RequestResponse } from "./data.js";
class RequestSession {
    _cookieJar = new Map();
    _anonymous = true;
    _username = "";
    _password = "";
    constructor() { }
    /**
     * 로그인 된 세션을 얻는다.
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise<LoginSession>}
     */
    static async loginSession(username, password) {
        const loginSession = new LoginSession(username, password);
        await loginSession._login();
        return loginSession;
    }
    /**
     * 익명의 요청 세션을 얻는다.
     *
     * @returns {RequestSession} 익명 세션
     */
    static anonymousSession() {
        return new AnonymouosSession();
    }
    /**
     * 요청의 헤더에서 현재 세션의 쿠키 값을 설정한다.
     *
     * @param {Response} res fetch 응답
     * @returns {Response} res
     */
    _loadCookies(res) {
        const setCookies = res.headers.get("Set-Cookie") || "";
        setCookies
            .split(/[;,]\s*/)
            // filters 'Secure' or 'HttpOnly'
            .filter((_) => _.indexOf("=") != -1)
            // filters 'Expires', 'Max-Age', 'Domain', 'Path', 'SameSite'
            .filter((_) => !_.match(/^(Expires|Max-Age|Domain|Path|SameSite)=/i))
            // set cookie
            .map((_) => {
            const [key, val] = _.split("=");
            this._cookieJar.set(key, val);
        });
        return res;
    }
    /**
     * 현재 세션의 쿠키 값을 문자열로 반환한다.
     *
     * @returns {string} Request 헤더에 사용할 수 있는 쿠키 문자열
     */
    _makeCookieString() {
        return [...this._cookieJar.keys()]
            .map((key) => `${key}=${this._cookieJar.get(key)}`)
            .join(";");
    }
    /**
     * 해당 페이지에서 CSRF 토큰을 얻어온다.
     *
     * @param {FetchResource} url CSRF 토큰을 얻어오고자 하는 URL
     * @param {string} tokenName 얻어오고자 하는 토큰의 name
     * @returns {Promise<string|object>} 얻어온 CSRF 토큰 값
     */
    async _getCSRFToken(url, tokenName = "_csrf") {
        const page = await this._fetch(url).then((resp) => resp.parse());
        const inputElements = page.querySelectorAll("input");
        for (const key in inputElements) {
            if (inputElements[key].attributes["name"] == tokenName) {
                return inputElements[key].attributes["value"];
            }
        }
        return "";
    }
    /**
     * 해당 세션이 유효한지 확인하고 갱신함
     * @abstract
     */
    _validateSession() { }
    /**
     * 해당 세션에서 fetch 요청을 보낸다.
     *
     * @param {FetchResource} resource
     * @param {RequestOption} init
     * @returns {Promise<Response|HTMLElement>} 응답
     */
    async _fetch(resource, init = { csrfRequired: false }) {
        this._validateSession();
        const headers = new Headers(init.headers);
        headers.set("Cookie", this._makeCookieString());
        const csrfRequired = init.csrfRequired || false;
        if (csrfRequired) {
            const csrfFrom = headers.get("Referer") || resource;
            const csrfToken = await this._getCSRFToken(csrfFrom);
            if (init.body instanceof URLSearchParams)
                init.body = new URLSearchParams(init.body);
            else
                init.body = new URLSearchParams();
            init.body.append("_csrf", csrfToken);
            headers.set("Cookie", this._makeCookieString());
            headers.set("Referer", csrfFrom.toString());
        }
        init.method = init.method || "GET";
        init.headers = headers;
        let response = await fq.fetch(resource, init);
        while (response.status == 526) {
            response = await fq.fetch(resource, init);
        }
        if (response.status >= 400) {
            throw new RequestError(`HTTP ${response.status}: ${resource}`);
        }
        this._loadCookies(response);
        return new RequestResponse(response);
    }
    /**
     * 해당 게시판을 얻어온다.
     *
     * @param {string} boardName 게시판의 이름
     * @return {Promise<Board>} 해당 이름을 가진 게시판
     */
    async getBoard(boardName) {
        this._validateSession();
        const primaryBoardUrl = `https://arca.live/b/${boardName}`;
        const response = await this._fetch(primaryBoardUrl);
        return this.boardFromUrl(response.url);
    }
    /**
     * URL에서 게시판 혹은 게시글을 얻어온다.
     *
     * @param {FetchResource} boardName 게시판 혹은 게시글의 URL
     * @return {Board|Article} 해당 URL이 나타내는 게시판 또는 게시글
     */
    fromUrl(articleOrBoardUrl) {
        const targetUrl = new URL(articleOrBoardUrl.toString());
        if (targetUrl.origin.indexOf("arca.live") === -1) {
            throw new ArgumentError("This is not an arca.live url.");
        }
        const [boardPath] = targetUrl.pathname.match(/^\/b\/[^/]+/);
        const board = new Board(this, {
            url: new URL(targetUrl.origin + boardPath),
        });
        const articleMatchResult = targetUrl.pathname.match(/^\/b\/[^/]+\/(\d+)/);
        if (articleMatchResult) {
            // this is an article
            const articleId = +articleMatchResult[1];
            return new Article(board, { articleId });
        }
        else {
            // this is a board
            return board;
        }
    }
    /**
     * URL에서 게시판을 얻어온다.
     * 게시판이 아닌 경우 예외를 발생.
     *
     * @param {FetchResource} url
     * @return {Board}
     */
    boardFromUrl(url) {
        const board = this.fromUrl(url);
        if (!(board instanceof Board))
            throw new ArgumentError("This is not a board URL.");
        return board;
    }
    /**
     * URL에서 게시글을 얻어온다.
     * 게시글이 아닌 경우 예외를 발생.
     *
     * @param {FetchResource} url
     * @return {Article}
     */
    articleFromUrl(url) {
        const article = this.fromUrl(url);
        if (!(article instanceof Article))
            throw new ArgumentError("This is not an article URL.");
        return article;
    }
    /**
     * 세션을 닫는다.
     */
    closeSession() {
        fq.stop();
    }
}
class LoginSession extends RequestSession {
    _lastSessionChecked = 0;
    _anonymous = false;
    /**
     * 로그인된 세션 LoginSession을 만든다.
     *
     * @param {string} username 사용자 ID
     * @param {string} password 사용자 PW
     */
    constructor(username, password) {
        super();
        this._username = username;
        this._password = password;
    }
    /**
     * 해당 세션의 로그인 정보로 로그인을 시도한다.
     *
     * @returns {Promise<RequestResponse>}
     */
    _login() {
        // fetch login page and load cookies
        const accountInfo = new URLSearchParams();
        accountInfo.append("goto", "/");
        accountInfo.append("username", this._username);
        accountInfo.append("password", this._password);
        return this._fetch("https://arca.live/u/login", {
            method: "POST",
            headers: { referer: "https://arca.live/u/login?goto=/" },
            body: accountInfo,
            csrfRequired: true,
        });
    }
    /**
     * 해당 세션의 로그인 상태를 확인한다.
     * 로그아웃되었을 경우 다시 로그인한다.
     */
    async _validateSession() {
        this._lastSessionChecked = this._lastSessionChecked || 0;
        // 10분에 1회 세션 체크
        if (this._lastSessionChecked + 1000 * 60 * 10 < Date.now()) {
            this._lastSessionChecked = Date.now();
            const shouldLogin = await this._fetch("https://arca.live")
                .then((res) => res.text())
                .then((text) => text.indexOf("/u/logout") == -1);
            if (shouldLogin) {
                await this._login();
            }
        }
    }
}
class AnonymouosSession extends RequestSession {
    _anonymous = true;
    constructor() {
        super();
    }
    /**
     * 익명 세션은 확인 및 갱신할 필요가 없음
     */
    async _validateSession() {
        return;
    }
    /**
     * 익명 사용자의 닉네임과 비밀번호를 설정한다.
     * @param {string} nickname
     * @param {string} password
     */
    setAnonymous(nickname, password) {
        this._username = nickname;
        this._password = password;
    }
}
export { RequestSession, AnonymouosSession, LoginSession };
//# sourceMappingURL=request-session.js.map