const mongoose = require("mongoose")

const connect = async()=>{
    await mongoose.connect('mongodb+srv://deepak:pandey@cluster0.ytx2l.mongodb.net/PassportJS?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Database Connected successfully")
}


module.exports = connect