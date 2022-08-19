import { ParceledCommentData } from "./data.js";
class Comment {
    /** @type {RequestSession} */
    _session;
    /** @type {ParceledCommentData} */
    _parceledData;
    get data() {
        return this._parceledData.unparcel();
    }
    set data(newData) {
        this._parceledData.parcel(newData);
    }
    get commentId() {
        return this.data.commentId;
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
        this._session = session;
        const parcel = { ...data };
        if (!parcel.commentId) {
            parcel.commentId = +parcel.url.hash.match(/^#c_(\d+)/)[1];
        }
        this._parceledData = new ParceledCommentData(parcel);
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
            throw new Error("This comment is already deleted");
        }
        const body = new URLSearchParams();
        if (this._session._anonymous) {
            body.append("password", this._session._password);
        }
        return await this._session._fetch(`${this.apiUrl}/delete`, {
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
            throw new Error("This comment is already deleted");
        }
        if (this._session._anonymous) {
            body.append("password", this._session._password);
        }
        body.append("contentType", "text");
        body.append("content", content);
        return await this._session._fetch(`${this.apiUrl}/edit`, {
            method: "POST",
            headers: { Referer: this.url.toString() },
            body: body,
            csrfRequired: true,
        });
    }
}
export { Comment };
//# sourceMappingURL=comment.js.map