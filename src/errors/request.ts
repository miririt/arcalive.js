class RequestError extends Error {
  name: string = "RequestError";

  /**
   * Session Error
   * @param {string} [message]
   */
  constructor(message: string) {
    super(message);
  }
}

export default RequestError;
