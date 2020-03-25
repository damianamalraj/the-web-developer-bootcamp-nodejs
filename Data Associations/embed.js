var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//USERS
var userSchema = new mongoose.Schema({
  email: String,
  name: String
});

var User = mongoose.model("User", userSchema);

//POST
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var postModel = mongoose.model("Post", postSchema);

// var newUser = new User({
//   email: "daniel@robert.edu",
//   name: "Daniel Robert"
// });

// newUser.save(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

var newPost = new User({
  title: "Hello, sir!",
  content: "My name is Daniel, and 20 years."
});

newPost.save(function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
