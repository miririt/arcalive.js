"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SessionError extends Error {
    name = "SessionError";
    /**
     * Session Error
     * @param {string} [message]
     */
    constructor(message) {
        super(message);
    }
}
exports.default = SessionError;
//# sourceMappingURL=session.js.map