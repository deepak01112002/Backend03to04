const mongoose = require("mongoose")


const connect = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/users")
        console.log("Database is Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect