const notFound = (req, res, next) => {
  //   res.status(404).json({ msg: "Not found" });
  const err = new Error("PAGE NOT FOUND");
  err.status = 404;
  next(err);
};

module.exports = notFound;
