const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title : {type : String, default : "No Title"},
    image : String,
    description : {type : String},
    createdTime : {type : Date , default : Date.now},
    userID : {type : mongoose.Schema.Types.ObjectId,ref : "user"}
},{timestamps : true})

const BlogModel = mongoose.model("blogs",blogSchema)

module.exports = BlogModel