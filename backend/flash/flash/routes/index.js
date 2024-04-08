var express = require("express");
var router = express.Router();

const userModel = require("./users");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  let userdata = await userModel.create({
    username: "APPLE2",
    nickname: "mac",
    description: " Best tech company in world",
    categories: ["js", "python", "next", "django", "modern animations"],
  });
  res.send(userdata);
});

router.get("/find", async function (req, res) {
  var regex = new RegExp("apple", "i");
  let user = await userModel.find({ categories: { $all: ["react"] } });
  res.send(user);
});
module.exports = router;
