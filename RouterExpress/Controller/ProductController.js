const ProductModel = require("../Model/ProductModel");

const AddProduct = async(req,res)=>{
    let d = await ProductModel.create(req.body)
    res.send({msg : "Product addes Successfully", data : d})
}

module.exports = AddProduct;