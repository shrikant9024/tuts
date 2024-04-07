var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//create user
// router.get("/create", async function (req, res, next) {
//   const createduser = await userModel.create({
//     username: "mac",
//     name: "apple",
//     age: "24",
//   });
//   res.send(createduser);
// });
//find user
// router.get("/allusers", async function (req, res) {
//   let allusers = await userModel.find({ username: "uh" });
//   console.log(allusers);
//   res.send(allusers);
// });

//delete user
router.get("/delete", async function (req, res) {
  let deletedusers = await userModel.findOneAndDelete({
    username: "mac",
  });
  res.send(deletedusers);
});

router.get("/allusers", async function (req, res) {
  let allusers = await userModel.find({ username: "uh" });
  console.log(allusers);
  res.send(allusers);
});

module.exports = router;
