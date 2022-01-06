const ApiError = require("./apiError");

function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.code).send(err.message);
    return;
  }

  res.status(500).send("Something went wrong");
}

module.exports = errorHandler