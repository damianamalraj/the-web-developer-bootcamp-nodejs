var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_3", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//POST
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

//USERS
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
  ]
});

var User = mongoose.model("User", userSchema);


Post.create({
    title: "Helo friend pt 2",
    content: "hdshdkshdksjdhksjdhskdjshdkjahdkjashdksajdhaskjdhaskjdhskdjhdkajshd"
}, function(err, post){
    User.findOne({email: "dani@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     email: "dani@gmail.com",
//     name: "Dani"
// });
