import { ParceledCommentData } from "./data.js";
import ArgumentError from "../errors/argument.js";
class Comment {
    /** @type {RequestSession} */
    session;
    /** @type {ParceledCommentData} */
    parceledData;
    get data() {
        return this.parceledData.unparcel();
    }
    set data(newData) {
        this.parceledData.parcel(newData);
    }
    get commentId() {
        return this.data.commentId ?? 0;
    }
    get url() {
        return this.data.url;
    }
    get apiUrl() {
        return this.data.apiUrl;
    }
    /**
     * 새 댓글 객체 Comment를 만든다.
     * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
     *
     * @param {RequestSession} session 세션
     * @param {CommentData} commentData 댓글 정보
     */
    constructor(session, data) {
        this.session = session;
        const parcel = { ...data };
        if (!parcel.commentId) {
            const matchResult = parcel.url.hash.match(/^#c_(\d+)/);
            if (!matchResult) {
                throw new ArgumentError(`Invalid URL and commentId.`);
            }
            parcel.commentId = +matchResult[1];
        }
        this.parceledData = new ParceledCommentData(parcel);
    }
    /**
     * 해당 댓글을 읽는다.
     *
     * @returns {CommentData} 댓글 정보
     */
    read() {
        return this.data;
    }
    /**
     * 해당 댓글을 삭제한다.
     *
     * @returns {Promise<RequestResponse>} 댓글 삭제 fetch에 대한 Response
     */
    async delete() {
        if (this.data.deleted) {
            throw new Error("This comment is already deleted.");
        }
        const body = new URLSearchParams();
        if (this.session.isAnonymous) {
            body.append("password", this.session.password);
        }
        return await this.session._fetch(`${this.apiUrl}/delete`, {
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
    async edit(content) {
        const body = new URLSearchParams();
        if (this.data.deleted) {
            throw new Error("This comment is already deleted.");
        }
        if (this.session.isAnonymous) {
            body.append("password", this.session.password);
        }
        body.append("contentType", "text");
        body.append("content", content);
        return await this.session._fetch(`${this.apiUrl}/edit`, {
            method: "POST",
            headers: { Referer: this.url.toString() },
            body: body,
            csrfRequired: true,
        });
    }
}
export { Comment };
//# sourceMappingURL=comment.js.map