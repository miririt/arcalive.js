declare class RequestError extends Error {
    name: string;
    /**
     * Session Error
     * @param {string} [message]
     */
    constructor(message: string);
}
export default RequestError;
