import { Response } from "node-fetch";
import type { RequestOption } from "./options.js";
import type { FetchResource } from "./data.js";
import { Board } from "../board/board.js";
import { Article } from "../article/index.js";
import { RequestResponse } from "./data.js";
declare class RequestSession {
    cookies: Map<string, string>;
    isAnonymous: boolean;
    username: string;
    password: string;
    /**
     * 로그인 된 세션을 얻는다.
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise<LoginSession>}
     */
    static loginSession(username: string, password: string): Promise<LoginSession>;
    /**
     * 익명의 요청 세션을 얻는다.
     *
     * @returns {AnonymouosSession} 익명 세션
     */
    static anonymousSession(): AnonymouosSession;
    /**
     * 요청의 헤더에서 현재 세션의 쿠키 값을 설정한다.
     *
     * @param {Response} res fetch 응답
     * @returns {Response} res
     */
    _loadCookies(res: Response): Response;
    /**
     * 현재 세션의 쿠키 값을 문자열로 반환한다.
     *
     * @returns {string} Request 헤더에 사용할 수 있는 쿠키 문자열
     */
    _makeCookieString(): string;
    /**
     * 해당 페이지에서 CSRF 토큰을 얻어온다.
     *
     * @param {FetchResource} url CSRF 토큰을 얻어오고자 하는 URL
     * @param {string} tokenName 얻어오고자 하는 토큰의 name
     * @returns {Promise<string|object>} 얻어온 CSRF 토큰 값
     */
    _getCSRFToken(url: FetchResource, tokenName?: string): Promise<string>;
    /**
     * 해당 세션이 유효한지 확인하고 갱신함
     * @abstract
     */
    _validateSession(): void;
    /**
     * 해당 세션에서 fetch 요청을 보낸다.
     *
     * @param {FetchResource} resource
     * @param {RequestOption} init
     * @returns {Promise<Response|HTMLElement>} 응답
     */
    _fetch(resource: FetchResource, init?: RequestOption): Promise<RequestResponse>;
    /**
     * 해당 게시판을 얻어온다.
     *
     * @param {string} boardName 게시판의 이름
     * @return {Promise<Board>} 해당 이름을 가진 게시판
     */
    getBoard(boardName: string): Promise<Board>;
    /**
     * URL에서 게시판 혹은 게시글을 얻어온다.
     *
     * @param {FetchResource} boardName 게시판 혹은 게시글의 URL
     * @return {Board|Article} 해당 URL이 나타내는 게시판 또는 게시글
     */
    fromUrl(articleOrBoardUrl: FetchResource): Board | Article;
    /**
     * URL에서 게시판을 얻어온다.
     * 게시판이 아닌 경우 예외를 발생.
     *
     * @param {FetchResource} url
     * @return {Board}
     */
    boardFromUrl(url: FetchResource): Board;
    /**
     * URL에서 게시글을 얻어온다.
     * 게시글이 아닌 경우 예외를 발생.
     *
     * @param {FetchResource} url
     * @return {Article}
     */
    articleFromUrl(url: FetchResource): Article;
    /**
     * 세션을 닫는다.
     */
    closeSession(): void;
}
declare class LoginSession extends RequestSession {
    private lastSessionChecked;
    isAnonymous: boolean;
    /**
     * 로그인된 세션 LoginSession을 만든다.
     *
     * @param {string} username 사용자 ID
     * @param {string} password 사용자 PW
     */
    constructor(username: string, password: string);
    /**
     * 해당 세션의 로그인 정보로 로그인을 시도한다.
     *
     * @returns {Promise<RequestResponse>}
     */
    _login(): Promise<RequestResponse>;
    /**
     * 해당 세션의 로그인 상태를 확인한다.
     * 로그아웃되었을 경우 다시 로그인한다.
     */
    _validateSession(): Promise<void>;
}
declare class AnonymouosSession extends RequestSession {
    _anonymous: boolean;
    /**
     * 익명 세션은 확인 및 갱신할 필요가 없음
     */
    _validateSession(): Promise<void>;
    /**
     * 익명 사용자의 닉네임과 비밀번호를 설정한다.
     * @param {string} nickname
     * @param {string} password
     */
    setAnonymous(nickname: string, password: string): void;
}
export { RequestSession, AnonymouosSession, LoginSession };
