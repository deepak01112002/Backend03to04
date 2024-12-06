const mongoose = require("mongoose")

const subcategorySchema = mongoose.Schema({
    name : String
})

const subCategoryModel = mongoose.model("subcategories" , subcategorySchema)


module.exports = subCategoryModel