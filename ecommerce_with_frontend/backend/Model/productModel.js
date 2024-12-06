const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {type : String, required : true},
    price : Number,
    description : String,
    category : {type : mongoose.Schema.Types.ObjectId , ref : "categories"},
    subCategory :  {type : mongoose.Schema.Types.ObjectId , ref : "subcategories"}
})


const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel