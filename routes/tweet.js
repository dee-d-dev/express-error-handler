const tweetController = require("../controller/tweet");
const express = require("express");

const router = express.Router();

router.post("/", tweetController.tweet);
router.get("/", (req, res)=> {
    res.send("Welcome")
})

module.exports=router