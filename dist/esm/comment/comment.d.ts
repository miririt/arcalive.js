/// <reference types="node" />
import type { Article } from "../article/article";
import type { RequestSession } from "../request/request-session";
import { RequestResponse } from "../request";
import type { CommentData } from "./data";
import { ParceledCommentData } from "./data";
declare class Comment {
    commentId: number;
    apiUrl: URL;
    url: URL;
    /** @type {RequestSession} */
    _session: RequestSession;
    /** @type {Article} */
    _article: Article;
    /** @type {ParceledCommentData} */
    _commentData: ParceledCommentData;
    /**
     * 새 댓글 객체 Comment를 만든다.
     * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
     *
     * @param {Article} article 해당 댓글이 속해있는 게시글 객체
     * @param {CommentData} commentData 댓글 정보
     */
    constructor(article: Article, commentData: CommentData);
    /**
     * 해당 댓글을 읽는다.
     *
     * @returns {CommentData} 댓글 정보
     */
    read(): CommentData;
    /**
     * 해당 댓글을 삭제한다.
     *
     * @returns {Promise<RequestResponse>} 댓글 삭제 fetch에 대한 Response
     */
    delete(): Promise<RequestResponse>;
    /**
     * 해당 댓글을 수정한다.
     *
     * @param {string} content 댓글 내용(HTML)
     * @returns {Promise<RequestResponse>} 댓글 수정 fetch에 대한 Response
     */
    edit(content: string): Promise<RequestResponse>;
}
export { Comment };
