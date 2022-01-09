const express = require("express");
const errorHandler = require("./errors/error_handler");
const notFound = require("./middlewares/notFound");
const app = express();
const ProductRoute = require("./routes/productRoute");
app.use("/products", ProductRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(4000, () => {
  console.log("running on port 4000");
});
