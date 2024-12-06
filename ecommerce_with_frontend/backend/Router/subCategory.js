const {Router} = require("express")
const subCategoryModel = require("../Model/SubCategoryModel")


const subCategoryRouter = Router()

subCategoryRouter.post("/add",async(req,res)=>{
    try {
        let data = await subCategoryModel.create(req.body)
        res.send({data})
    } catch (error) {
        res.send({err : error.message})
    }
})


subCategoryRouter.get("/getall",async(req,res)=>{
    try {
        let data = await subCategoryModel.find()
        res.send({data})
    } catch (error) {
        res.send({err : error.message})
    }
})

module.exports = subCategoryRouter