const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {type : String, required : true},
    price : Number,
    description : String
    
})