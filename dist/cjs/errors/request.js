"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = RequestError;
//# sourceMappingURL=request.js.map