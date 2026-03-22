const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get("/", function (req, res) {
  res.render("home");
})

app.get("/tedtube", function (req, res) {
  res.render("tedtube");
});

app.get("/credits", function (req, res) {
  res.render("credits");
});

app.get("/articles", function (req, res) {
  res.render("articles")
})

module.exports = app;
