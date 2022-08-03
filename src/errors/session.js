class SessionError extends Error {
  /**
   * Session Error
   * @param {string} [message]
   * @param {string} [filename]
   * @param {string} [lineNumber]
   */
  constructor(message, filename, lineNumber) {
    super(message, filename, lineNumber);
    this.name = "SessionError";
  }
}

module.exports = SessionError;
