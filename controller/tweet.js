const ApiError = require("../error/apiError");

class tweetController {
  tweet(req, res, next) {
    const { msg } = req.body;
    if (!msg) {
      next(ApiError.badRequest("msg field is required"));
      return;
    }
    res.status(200);
  }
}

module.exports = new tweetController();
