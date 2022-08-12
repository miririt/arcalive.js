class RequestError extends Error {
    name = "RequestError";
    /**
     * Session Error
     * @param {string} [message]
     */
    constructor(message) {
        super(message);
    }
}
export default RequestError;
//# sourceMappingURL=request.js.map