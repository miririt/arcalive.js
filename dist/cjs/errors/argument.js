"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArgumentError extends Error {
    name = "ArgumentError";
    /**
     * Argument Error
     * @param {string} [message]
     */
    constructor(message) {
        super(message);
    }
}
exports.default = ArgumentError;
//# sourceMappingURL=argument.js.map