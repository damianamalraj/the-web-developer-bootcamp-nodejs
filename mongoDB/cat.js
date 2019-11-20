var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

/*var luka = new Cat({
  name: "luka",
  age: 11,
  temperament: "good"
});

luka.save(function(err, cat) {
  if (err) {
    console.log("Somthing went wrong");
  } else {
    console.log("We just saved a cat to the DB");
    console.log(cat);
  }
});*/

Cat.create(
  {
    name: "Matthew",
    age: 18,
    temperament: "nice"
  },
  function(err, cat) {
    if (err) {
      console.log(err);
    } else {
      cat;
    }
  }
);

Cat.find({}, function(err, cats) {
  if (err) {
    console.log("oh no, error!");
  } else {
    console.log("All the cats");
    console.log(cats);
  }
});
