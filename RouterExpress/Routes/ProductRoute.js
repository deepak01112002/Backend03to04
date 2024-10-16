const express = require("express")
const AddProduct = require("../Controller/ProductController")

let ProductRoute = express.Router()

ProductRoute.post("/add",AddProduct)


module.exports = ProductRoute
