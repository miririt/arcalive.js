class ArgumentError extends Error {
  name: string = "ArgumentError";

  /**
   * Argument Error
   * @param {string} [message]
   */
  constructor(message: string) {
    super(message);
  }
}

export default ArgumentError;
