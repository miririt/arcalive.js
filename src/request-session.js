const url = require("url");
const htmlParser = require("node-html-parser");
const fq = require("./fetch-queue");
const Board = require("./board");
const Article = require("./article");
const { FetchError } = require("node-fetch");
const { ArgumentError } = require("./errors");

class RequestSession {
  _cookies = {};
  _anonymous = true;

  constructor() {}

  /**
   * 로그인 된 세션을 얻는다.
   *
   * @param {string} username
   * @param {string} password
   * @returns {LoginSession}
   */
  static login(username, password) {
    return new LoginSession(username, password);
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

    this._cookies = this._cookies || {};
    setCookies
      .split(/[;,]\s*/)
      // filters 'Secure' or 'HttpOnly'
      .filter((_) => _.indexOf("=") != -1)
      // filters 'Expires', 'Max-Age', 'Domain', 'Path', 'SameSite'
      .filter((_) => !_.match(/^(Expires|Max-Age|Domain|Path|SameSite)=/i))
      // set cookie
      .map((_) => {
        const [key, val] = _.split("=");
        this._cookies[key] = val;
      });

    return res;
  }

  /**
   * 현재 세션의 쿠키 값을 문자열로 반환한다.
   *
   * @returns {string} Request 헤더에 사용할 수 있는 쿠키 문자열
   */
  _makeCookieString() {
    let cookieKeyVal = [];
    this._cookies = this._cookies || {};
    for (const key in this._cookies) {
      cookieKeyVal.push(`${key}=${this._cookies[key]}`);
    }

    return cookieKeyVal.join(";");
  }

  /**
   * 해당 페이지에서 CSRF 토큰을 얻어온다.
   *
   * @param {string|URL} url CSRF 토큰을 얻어오고자 하는 URL
   * @param {string|string[]} tokenName 얻어오고자 하는 토큰의 name
   * @returns {Promise<string|object>} 얻어온 CSRF 토큰 값
   */
  async _getCSRFToken(url, tokenName = "_csrf") {
    const page = await this._fetch(url);

    const tokens = {};

    const inputElements = page.querySelectorAll("input");
    for (const key in inputElements) {
      if (
        "string" === typeof tokenName &&
        inputElements[key].attributes.name == tokenName
      ) {
        return inputElements[key].attributes.value;
      } else if (tokenName.includes(inputElements[key].attributes.name)) {
        tokens[inputElements[key].attributes.name] =
          inputElements[key].attributes.value;
      }
    }

    return tokens;
  }

  /**
   * 해당 세션의 로그인 상태를 확인한다.
   * 로그아웃되었을 경우 다시 로그인한다.
   */
  async _checkSession() {
    if (this._anonymous) return;

    this._lastSessionChecked = this._lastSessionChecked || 0;
    if (this._lastSessionChecked + 1000 * 60 * 10 < new Date()) {
      this._lastSessionChecked = new Date().getTime();
      const shouldLogin = await this._fetch("https://arca.live", {
        parse: false,
      })
        .then((res) => res.text())
        .then((text) => text.indexOf("/u/logout") == -1);

      if (shouldLogin) {
        await this._login();
      }
    }
  }

  /**
   * 해당 세션에서 fetch 요청을 보낸다.
   *
   * @param {string|URL} resource
   * @param {object} init
   * @param {boolean} [init.parse=true] true일 경우 응답을 parse해서 반환함
   * @param {boolean} [init.csrfRequired=false] true일 경우 CSRF 토큰을 같이 전송함
   * @returns {Promise<Response|Node>} 응답
   */
  async _fetch(resource, init = {}) {
    await this._checkSession();

    init.method = init.method || "GET";
    init.headers = init.headers || {};
    init.headers.Cookie = this._makeCookieString();

    const parse = init.parse === undefined ? true : init.parse;
    const csrfRequired = init.csrfRequired || false;

    delete init.parse;
    delete init.csrfRequired;

    if (csrfRequired) {
      const csrfFrom = init.headers.referer || resource;
      const csrfToken = await this._getCSRFToken(csrfFrom);

      init.body = init.body || new url.URLSearchParams();
      init.body.append("_csrf", csrfToken);

      init.headers.Cookie = this._makeCookieString();
      init.headers.referer = csrfFrom;
    }

    let response = await fq.fetch(resource, init);

    while (response.status == 526) {
      response = await fq.fetch(resource, init);
    }

    if (response.status >= 400) {
      throw new FetchError(`HTTP ${response.status}: ${resource}`);
    }

    this._loadCookies(response);

    if (parse) {
      return response.text().then((html) => htmlParser.parse(html));
    }

    return response;
  }

  /**
   * 해당 게시판을 얻어온다.
   *
   * @param {string} boardName 게시판의 이름
   * @return {Promise<Board>} 해당 이름을 가진 게시판
   */
  async getBoard(boardName) {
    await this._checkSession();

    const primaryBoardUrl = `https://arca.live/b/${boardName}`;

    const response = await this._fetch(primaryBoardUrl, { parse: false });

    return this.fromUrl(response.url);
  }

  /**
   * URL에서 게시판 혹은 게시글을 얻어온다.
   *
   * @param {string|URL} boardName 게시판 혹은 게시글의 URL
   * @return {Board|Article} 해당 URL이 나타내는 게시판 또는 게시글
   */
  fromUrl(articleOrBoardUrl) {
    const targetUrl = new URL(articleOrBoardUrl);

    if (targetUrl.origin.indexOf("arca.live") === -1) {
      throw new ArgumentError("This is not an arca.live url.");
    }

    if (!targetUrl.pathname.match(/^\/b\/([^/]+)/)) {
      throw new ArgumentError("This is not an valid board or article url.");
    }

    const boardPath = targetUrl.pathname.match(/^\/b\/[^/]+/)[0];
    const board = new Board(this, {
      url: new URL(targetUrl.origin + boardPath),
    });

    if (targetUrl.pathname.match(/^\/b\/[^/]+\/(\d+)/)) {
      // this is an article
      const articleId = +targetUrl.pathname.match(/^\/b\/[^/]+\/(\d+)/)[1];
      return new Article(board, { articleId: articleId });
    } else {
      // this is a board
      return board;
    }
  }

  /**
   * 세션을 닫는다.
   */
  closeSession() {
    fq.stop();
  }
}

class LoginSession extends RequestSession {
  _username = "";
  _password = "";

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
   * 성공 결과와는 관계없이 반환한다.
   *
   * @returns {Promise<Response>}
   */
  _login() {
    // fetch login page and load cookies

    const accountInfo = new url.URLSearchParams();
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
}

class AnonymouosSession extends RequestSession {
  _anonymous = true;
  constructor() {
    super();
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

module.exports = RequestSession;
