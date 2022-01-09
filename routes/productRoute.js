const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingleProducts,
  updateProducts,
  deleteProducts,
  postProducts,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", postProducts);
router.get("/:id", getSingleProducts);
router.patch("/:id", updateProducts);
router.delete("/:id", deleteProducts);

module.exports = router;
