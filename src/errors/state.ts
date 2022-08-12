class StateError extends Error {
  name: string = "StateError";

  /**
   * Argument Error
   * @param {string} [message]
   */
  constructor(message: string) {
    super(message);
  }
}

export default StateError;
