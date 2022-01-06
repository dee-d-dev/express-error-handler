class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  badRequest(msg) {
    return new ApiError(400, msg);
  }

  internal(msg) {
    return new ApiError(500, msg);
  }
}

module.exports = ApiError;
