const mongoose = require("mongoose")


let userSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    password : String,
    email : String,
    contact : String,
    message : String,
    image: String
})

let UserModel = mongoose.model("user",userSchema)

module.exports = UserModel