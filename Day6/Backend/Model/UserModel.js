
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name : String,
    password : String,
    email : String
})


const UserModel = mongoose.model("users",UserSchema)

module.exports = UserModel