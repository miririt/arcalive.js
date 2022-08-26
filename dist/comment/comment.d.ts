/// <reference types="node" resolution-mode="require"/>
import type { RequestSession } from "../session/index.js";
import { RequestResponse } from "../session/index.js";
import type { CommentData } from "./data.js";
declare class Comment {
    /** @type {RequestSession} */
    private session;
    /** @type {ParceledCommentData} */
    private parceledData;
    get data(): CommentData;
    set data(newData: CommentData);
    get commentId(): number;
    get url(): URL;
    get apiUrl(): URL;
    /**
     * 새 댓글 객체 Comment를 만든다.
     * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
     *
     * @param {RequestSession} session 세션
     * @param {CommentData} commentData 댓글 정보
     */
    constructor(session: RequestSession, data: CommentData);
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
