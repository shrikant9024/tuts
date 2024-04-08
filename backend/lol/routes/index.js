var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */

router.get("/", function (req, res) {
  res.cookie("age", 25);
  res.render("index", { title: "Express" });
});

router.get("/read", function (req, res) {
  console.log(req.cookies.age);
  res.send("check");
});

router.get("/delete", function (req, res) {
  res.clearCookie("age");
  res.send("cookie got cleared");
});

// //create session
// router.get("/", function (req, res, next) {
//   req.session.ban = true;
//   res.render("index", { title: "Express" });
// });

// //read session
// router.get("/checkban", function (req, res) {
//   if (req.session.ban === true) {
//     res.send("you are banned");
//   }
//delete session
// router.get("/removeban", function (req, res) {
//   req.session.destroy(function (err) {
//     if (err) throw err;
//     res.send("Ban removed");
//   });
//   });
// });

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
// router.get("/delete", async function (req, res) {
//   let deletedusers = await userModel.findOneAndDelete({
//     username: "mac",
//   });
//   res.send(deletedusers);
// });

// router.get("/allusers", async function (req, res) {
//   let allusers = await userModel.find({ username: "uh" });
//   console.log(allusers);
//   res.send(allusers);
// });

module.exports = router;
