const mongoose = require("mongoose")

const connect = async()=>{
   try {
     await mongoose.connect("mongodb+srv://deepak:pandey@cluster0.ytx2l.mongodb.net/BlogApplication?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Server is Connected")
   } catch (error) {
      console.log(error)
   }
}

module.exports = connect