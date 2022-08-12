"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParseError extends Error {
    name = "ParseError";
    /**
     * Argument Error
     * @param {string} [message]
     */
    constructor(message) {
        super(message);
    }
}
exports.default = ParseError;
//# sourceMappingURL=parse.js.map