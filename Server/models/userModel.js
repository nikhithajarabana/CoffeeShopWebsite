const mongoose = require("mongoose")  //to import mongoose package


const userSchema = mongoose.Schema({   //creating user schema
    name : {type: String, require},
    email: {type: String, require},
    password: {type: String, require},
    isAdmin: {type: Boolean, require, default: false},
}, {
    timestamps: true,
})


module.exports = mongoose.model('users', userSchema) //compiling user schema into the model and exporting it to be used into routes files