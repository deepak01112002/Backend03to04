const express = require("express")
const connection = require("./server")
const UserModel = require("./Model/userSchema")

const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/form",(req,res)=>{
    res.render("form.ejs")
})

app.post("/form",async (req,res)=>{
    console.log(req.body)
    await UserModel.create(req.body)
    res.redirect("/")
})


app.listen(9595,()=>{
    connection()
    console.log("Server is Connected on Port 9595")
})