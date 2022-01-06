const express = require("express");
const tweet = require("./routes/tweet");

const app = express();
app.use(express.json());

app.use("/tweet", tweet);

app.listen(4000, () => {
  console.log("Running on 4000");
});
