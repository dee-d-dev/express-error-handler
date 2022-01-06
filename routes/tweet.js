const tweet = require("../controller/tweet");
const express = require("express");

const router = express.Router();

router.get("/", tweet);

module.exports=router