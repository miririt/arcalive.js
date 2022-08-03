class ArgumentError extends Error {
  /**
   * Argument Error
   * @param {string} [message]
   * @param {string} [filename]
   * @param {string} [lineNumber]
   */
  constructor(message, filename, lineNumber) {
    super(message, filename, lineNumber);
    this.name = "ArgumentError";
  }
}

module.exports = ArgumentError;
