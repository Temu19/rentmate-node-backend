// proper error class instead of passing parameters to the next function
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = "") {
    if (stack) {
      super(message);
      this.stack = stack;
    } else {
      super(message);
      Error.captureStackTrace(this, this.constructor);
    }
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

export default ApiError;
