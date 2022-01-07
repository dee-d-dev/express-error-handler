const express = require("express");
const errorHandler = require("./error/error_handler");
const tweet = require("./routes/tweet");

const app = express();
app.use(express.json());

app.use(errorHandler);
app.use("/tweet", tweet);

app.listen(4000, () => {
  console.log("Running on 4000");
});
