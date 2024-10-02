const mongoose = require("mongoose")

const connection = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/deepak")
    console.log("Database is Connected")
}

module.exports = connection