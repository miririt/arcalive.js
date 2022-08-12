"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StateError extends Error {
    name = "StateError";
    /**
     * Argument Error
     * @param {string} [message]
     */
    constructor(message) {
        super(message);
    }
}
exports.default = StateError;
//# sourceMappingURL=state.js.map