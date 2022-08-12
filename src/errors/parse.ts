class ParseError extends Error {
  name: string = "ParseError";

  /**
   * Argument Error
   * @param {string} [message]
   */
  constructor(message: string) {
    super(message);
  }
}

export default ParseError;
