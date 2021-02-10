function createErrorClass(customErrorName) {
  /**
   * Create SessionError instance
   *
   * @param   String      message      Error message for human
   * @param   String      type         Error type for machine
   * @param   String      systemError  For Node.js system error
   * @return  SessionError
   */
  function CustomError(message, type, systemError) {
    Error.call(this, message);

    this.message = message;
    this.type = type;

    // when err.type is `system`, err.code contains system error code
    if (systemError) {
      this.code = this.errno = systemError.code;
    }

    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
  }

  CustomError.prototype = Object.create(Error.prototype);
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = customErrorName;

  return CustomError;
}

module.exports = {
  'SessionError': createErrorClass('SessionError'),
  'ArgumentError': createErrorClass('ArgumentError')
};