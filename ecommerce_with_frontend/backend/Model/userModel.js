const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {type : String, require : true},
    email : {type : String,require : true , unique : true},
    password : {type : String , require : true},
    role : {type : String, require : true, default : "user" , enum : ["user", "admin"] }
})


const UserModel =  mongoose.model("user", userSchema)


module.exports = UserModel