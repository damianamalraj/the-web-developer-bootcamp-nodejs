var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var friends = ["Harry", "Ron", "Hermoiny"];

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/friends", function (req, res) {

    res.render("friend.ejs", { friends: friends });
});

app.post("/addFriends", function (req, res) {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen("3000", function () {
    console.log("server has started");
});