const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title : String,
    price : Number,
    image : String,
    des : String
})


const ProductModel = mongoose.model("product",ProductSchema)

module.exports = ProductModel