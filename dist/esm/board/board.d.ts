/// <reference types="node" />
import type { RequestSession } from "../request/request-session";
import { Article, ArticleData, ArticlePostOption, ArticleReadOption } from "../article";
import { RequestResponse } from "../request";
import type { BoardData } from "./data";
import type { BoardQueryOption, BoardReadOption } from "./options";
declare class Board {
    /** @type {number} 새 인스턴스 생성 시 사용할 기본 캐시 사이즈 */
    static _cacheSize: number;
    /** @property {RequestSession} 요청 시 사용하는 세션 */
    _session: RequestSession;
    /** @property {URL} 게시판 URL */
    url: URL;
    /** @property {number} 게시판 내 캐시할 게시글 개수 */
    _cacheSize: number;
    /** @property {object<number,Article>} 캐시된 게시글들 */
    _cachedArticles: Map<number, Article>;
    /** @property {number[]} 캐시된 게시글의 우선순위(LRU) */
    _cachedOrder: number[];
    /**
     * 새 게시판 객체 Board를 만든다.
     * 생성시에는 게시판의 존재 여부를 확인하지 않는다(Rate Limit때문).
     *
     * @param {RequestSession} session 게시판을 열람할 세션
     * @param {BoardData} boardData 게시판 정보
     */
    constructor(session: RequestSession, boardData: BoardData);
    /**
     * Board의 기본 캐시 사이즈
     */
    static get defaultCacheSize(): number;
    /**
     * Board 객체의 캐시 사이즈
     */
    get articleCacheSize(): number;
    /**
     * Board의 기본 캐시 사이즈를 설정한다.
     * 이미 생성된 객체에는 효과가 없다.
     *
     * @param {number} newSize 새 캐시 사이즈
     */
    static set defaultCacheSize(newSize: number);
    /**
     * Board 객체의 캐시 사이즈를 설정한다.
     *
     * @param {number} newSize 새 캐시 사이즈
     */
    set articleCacheSize(newSize: number);
    /**
     * 해당 번호의 Article 객체를 얻어온다.
     * 만일 캐시된 Article 객체가 지나치게 많을 경우 캐시를 정리한다.
     *
     * @param {number} articleId 게시글 번호
     * @returns {Article} 해당 번호의 게시글을 나타내는 Article 객체
     */
    getArticle(articleId: number): Article;
    /**
     * 해당 게시판에 있는 게시글의 객체 Article을 읽는다.
     * 존재하지 않을 경우 실패한다.
     *
     * @param {number} articleId 게시글 번호
     * @param {Article.ArticleReadOption} options 게시글 읽기 옵션
     * @returns {Promise<ArticleData>} 해당 번호의 게시글을 나타내는 Article 객체
     */
    readArticle(articleId: number, options?: ArticleReadOption): Promise<ArticleData>;
    /**
     * 해당 게시판에 새 글을 작성한다.
     *
     * @param {Article.ArticlePostOption} article 게시글 내용
     * @returns {Promise<Article>} 작성된 게시글 객체에 대한 Promise
     */
    writeArticle(article: ArticlePostOption): Promise<Article>;
    /**
     * 해당 게시판에서 글을 삭제한다.
     *
     * @param {number} articleId 게시글 번호
     * @returns {Promise<RequestResponse>} 게시글 삭제 fetch에 대한 Response
     */
    deleteArticle(articleId: number): Promise<RequestResponse>;
    /**
     * 해당 게시판에서 글을 수정한다.
     *
     * @param {number} articleId 게시글 번호
     * @param {ArticlePostOption} article 수정될 내용(지정되지 않은 property는 현재의 값을 그대로 가지고 감)
     * @returns {Promise<RequestResponse>} 게시글 수정 fetch에 대한 Response
     */
    editArticle(articleId: number, article: ArticlePostOption): Promise<RequestResponse>;
    /**
     * 해당 게시판에서 글을 검색한다.
     *
     * @param {number} page 검색 결과 페이지 번호
     * @param {BoardQueryOption} options 검색 옵션
     * @returns {Promise<Article[]>} 해당 페이지에 있는 게시글 검색 결과를 나타내는 Article[]
     */
    queryPage(page?: number, options?: BoardQueryOption): Promise<Article[]>;
    /**
     * 해당 게시판의 페이지를 얻어온다.
     * 내부적으로 queryPage를 호출한다.
     *
     * @param {number} page 페이지 번호
     * @param {BoardReadOption} options 검색 옵션
     * @returns {Promise<Article[]>} 해당 게시글 분류의 해당 페이지에 있는 게시글을 나타내는 Article[]
     */
    readPage(page: number, options?: BoardReadOption): Promise<Article[]>;
}
export { Board };
