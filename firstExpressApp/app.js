var express = require("express");
var app = express();

app.get("*", function (req, res) {
    console.log("Page not found!!!");
});

app.get("/", function (req, res) {
    res.send("Hi there!");
});

app.get("/bye", function (req, res) {
    res.send("goodbye!!");
});

app.listen("3000", function () {
    console.log("server has started");
});