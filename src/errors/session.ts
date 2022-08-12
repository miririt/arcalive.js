class SessionError extends Error {
  name: string = "SessionError";

  /**
   * Session Error
   * @param {string} [message]
   */
  constructor(message: string) {
    super(message);
  }
}

export default SessionError;
