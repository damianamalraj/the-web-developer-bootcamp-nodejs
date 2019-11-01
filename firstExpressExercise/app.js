var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi, there welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    var theName = req.params.animal;
    if (theName === "pig") {
        res.send("The " + theName + " says " + "Oink");
    } else if (theName === "cow") {
        res.send("The " + theName + " says " + "Moo");
    } else if (theName === "dog") {
        res.send("The " + theName + " says " + "Woof Woofs");
    }
});

app.get("/repeat/:print/:number", function (req, res) {
    var print = req.params.print;
    var number = parseInt(req.params.number);
    var result = "";

    for (var i = 0; i < number; i++) {
        result += print + " ";
    }
    res.send(result);
});

app.get("*", function (req, res) {
    res.send("Page not found!");
});

app.listen("3000", function () {
    console.log("Server has started");
});