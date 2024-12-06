const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name : String
})

const CategoryModel = mongoose.model("categories" , categorySchema)


module.exports = CategoryModel