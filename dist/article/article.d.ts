/// <reference types="node" resolution-mode="require"/>
import type { Board } from "../board/index.js";
import type { RequestSession } from "../request/index.js";
import type { RequestResponse } from "../request/index.js";
import type { ArticleReadOption, ArticlePostOption } from "./options.js";
import { ArticleData, ParceledArticleData } from "./data.js";
import { Comment } from "../comment/index.js";
declare class Article {
    _session: RequestSession;
    _board: Board;
    _parceledData: ParceledArticleData;
    /** @property {boolean} 이 Article이 실제로 로드되었는지를 나타냄. 이 Article에 대한 수정 fetch가 보내진 경우 dirty flag의 역할도 겸함. 해당 사항은 수정예정. */
    _loaded: boolean;
    get data(): ArticleData;
    set data(newData: ArticleData);
    get articleId(): number;
    get url(): URL;
    /**
     * 새 게시글 객체 Article을 만든다.
     * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
     *
     * @param {Board} board 해당 게시글이 속해 있는 게시판 객체
     * @param {ArticleData} data 게시글 정보
     */
    constructor(board: Board, data: ArticleData);
    /**
     * 해당 게시글을 fetch한다.
     * 만일 이미 읽어온 게시글일 경우, fetch 없이 정보를 그대로 반환한다.
     *
     * @param {ArticleReadOption} options 게시글 읽기 옵션
     * @returns {Promise<ArticleData>} 해당 게시글의 articleData 사본
     */
    read(options?: ArticleReadOption): Promise<ArticleData>;
    /**
     * 해당 게시글을 삭제한다.
     *
     * @returns {Promise<Response>} 삭제 fetch에 대한 Response
     */
    delete(): Promise<RequestResponse>;
    /**
     * 해당 게시글을 수정한다.
     *
     * @param {ArticlePostOption} article 수정될 내용(지정되지 않은 property는 현재의 값을 그대로 가지고 감)
     * @returns {Promise<RequestResponse>} 수정 fetch에 대한 Response
     */
    edit(article?: ArticlePostOption): Promise<RequestResponse>;
    /**
     * 해당 게시글의 작성자를 차단한다.
     *
     * @param {number} duration 차단 기간(단위 : 초)
     * @returns {Promise<Response>} 차단 fetch에 대한 Response
     */
    blockUser(duration: number): Promise<RequestResponse>;
    /**
     * 해당 게시글을 볼 수 없는 국가를 설정한다.
     *
     * @param {string[]} countries 제한 국가 목록
     * @returns {Promise<Response>} 국가 제한 fetch에 대한 Response
     */
    restrictCountry(...countries: string[]): Promise<RequestResponse>;
    /**
     * 해당 게시글에 새 댓글을 작성한다.
     * 작성하더라도 articleData에는 추가되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
     *
     * @param {string} comment 댓글 내용(HTML)
     * @returns {Promise<Comment>} 댓글 작성 fetch에 대한 Response
     */
    writeComment(comment: string): Promise<Comment>;
    /**
     * 해당 게시글에서 댓글을 삭제한다.
     * 삭제하더라도 articleData에서는 삭제되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
     *
     * @param {number} commentId 댓글 번호
     * @returns {Promise<Response>} 댓글 작성 fetch에 대한 Response
     */
    deleteComment(commentId: number): Promise<RequestResponse>;
    /**
     * 해당 게시글에 작성된 댓글을 수정한다.
     * 수정하더라도 articleData에는 수정되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
     *
     * @param {number} commentId 댓글 번호
     * @param {string} comment 댓글 내용(HTML)
     * @returns {Promise<Response>} 댓글 수정 fetch에 대한 Response
     */
    editComment(commentId: number, comment: string): Promise<RequestResponse>;
}
export { Article };
