const mongoose = require("mongoose")


const connect  =  async()=>{
   await mongoose.connect(process.env.MONGOURL)
   console.log("db connected")
}

module.exports = connect