const getProducts = (req, res, next) => {
  res.send("get all products");
//   next(new Error("Products not found"))
};
const postProducts = (req, res, next) => {
  res.send("post a products");
};
const getSingleProducts = (req, res, next) => {
  res.send("get single product");
};
const updateProducts = (req, res, next) => {
  res.send("update a single product");
};
const deleteProducts = (req, res, next) => {
  res.send("delete a single product");
};

module.exports = {
  getProducts,
  postProducts,
  getSingleProducts,
  deleteProducts,
  updateProducts,
};
