const mongoose = require("mongoose");  //import mongoose package 

var mongoURL =
  "mongodb+srv://tanuj:KHgX5ZwSu2ulLbBK@cluster0.dkqesjz.mongodb.net/test";  //database connection string 

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });  //configure database connection parameter 

var db = mongoose.connection;//establish database coonection
//successful connection callback 
db.on("connected", () => {
  console.log("Mongo DB connection successful");//connection successful message
});

db.on("error", () => {
  console.log("Mongo DB connection failed");//connection error message 
});

module.exports = mongoose;//export mongoose to be used in route and model files
