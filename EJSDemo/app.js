var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/ilove/:love", function (req, res) {
    var love = req.params.love;
    res.render("love.ejs", { loveVar: love });
});

app.get("/posts", function (req, res) {
    var posts = [
        {
            tittle: "GOT",
            author: "Martin"
        },

        {
            tittle: "Lord Of The Rings",
            author: "Tolkien"
        },

        {
            tittle: "Hobbit",
            author: "Tolkien"
        }
    ];

    res.render("posts.ejs", { posts: posts });
});

app.listen("3000", function () {
    console.log("Server has started");
});