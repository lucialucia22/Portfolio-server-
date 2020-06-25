var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

// after we have install ejs we can set it as a our view engine
app.set("view engine", "ejs");

app.get("/home", function (req, res) {
  // EJS allows us to render a file in our views folder and bind data to that file
  // in the form of a JS object.
  res.render("home.ejs", {
    message: "Hello from Server",
    morning: "What a beautiful day!",
  });
});
app.get("/", function (req, res) {
  res.send("/home");
});
app.get("/co", function (req, res) {
  res.render("/contact");
});
app.get("/about", function (req, res) {
  res.send("/about");
});
app.listen(PORT, function () {
  console.log("We are LIT on port: " + PORT);
});
