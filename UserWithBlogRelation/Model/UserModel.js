const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username : {type : String},
    email : String,
    password : {type : String, default : null}
})


const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel