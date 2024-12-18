const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
const connect = require("./Config/Database")
const UserModel = require("./model/usermodel")
const multer = require("multer")
const cookie = require("cookie-parser")
const{ index,DataPost, DataLogin }= require("./Controller/userController")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const s=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../Day5/public"))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const data=multer({storage:s})




app.get("/", index)
app.post("/form", data.single("image"), DataPost)

app.get("/login",(req,res)=>{
    res.render("Login.ejs")
})

app.post("/login",DataLogin)


app.get("/data", async (req, res) => {

    let data = await UserModel.find()
    // console.log(data)
    // res.send(data)
    res.render("DataMaping.ejs", { data })
})

app.get("/delete/:deepak", async (req, res) => {
    let { deepak } = req.params
    let data = await UserModel.findById(deepak)
    console.log(data)
    if (data.image) {
        const image_path = path.join(__dirname, "../Day5/public", data.image)
        if (fs.existsSync(image_path)) {
            fs.unlinkSync(image_path)
        }
    }
    await UserModel.findByIdAndDelete(deepak)
    res.redirect("/data")
})


// app.post("/delete/:deepak",async(req,res)=>{
//     let {deepak} = req.params
//     await UserModel.findByIdAndDelete(deepak)
//     res.redirect("/data")
// })


app.get("/edit/:id", async (req, res) => {
    let id = req.params.id
    
    let data = await UserModel.findById(id)

    res.render("EditForm.ejs", { data })
})

app.post("/edit/:d",data.single("image"),async (req, res) => {
    console.log(req.params.d)
    const d=await UserModel.findById(req.params.d)
    
    if (req.file) {
        if (d.image) {
            const image_path = path.join(__dirname, "../Day5/public", d.image)
            if (fs.existsSync(image_path)) {
                fs.unlinkSync(image_path)
            }
        }
        await UserModel.findByIdAndUpdate(req.params.d,{
             ...req.body,
             image:req.file.filename
            })
    }else{
        const user = await UserModel.findByIdAndUpdate(req.params.d,req.body)

    }
    res.redirect("/data")
})





app.listen(9090, () => {
    connect()
    console.log("port running on 9090");

})