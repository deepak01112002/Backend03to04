const express = require("express")
const connection = require("./server")
const path = require("path")
const UserModel = require("./Model/userSchema")
const multer = require("multer")

const app = express()


app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))

const s = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,path.join(__dirname,"../Day4/public/assets/images"))
    },
    filename :  (req,file,cb)=>{
        cb(null,file.originalname)
    }
    
})

const Data = multer({storage : s})







app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/form",(req,res)=>{
    res.render("form.ejs")
})

app.post("/form",Data.single("image"),async (req,res)=>{
    console.log(req.file.filename)
    
    await UserModel.create({
        ...req.body,
        image : req.file.filename
    })
    res.redirect("/")
})

app.get("/data",async(req,res)=>{
    let d = await UserModel.find()
    res.render("Data.ejs",{d})
})



app.listen(9595,()=>{
    connection()
    console.log("Server is Connected on Port 9595")
})