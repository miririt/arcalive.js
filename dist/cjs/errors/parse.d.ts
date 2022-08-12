declare class ParseError extends Error {
    name: string;
    /**
     * Argument Error
     * @param {string} [message]
     */
    constructor(message: string);
}
export default ParseError;
