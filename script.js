const express = require("express");
const app = express();

app.use(function (req, res, next) {
  next();
});

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", { age: 12 });
});
app.get("/error", function (req, res) {
  throw Error("Some thing went wrong");
});

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

app.listen(3000);
