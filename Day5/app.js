const express=require("express")
const app = express()
const connect = require("./Config/Database")
const UserModel = require("./model/usermodel")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/form",async(req,res)=>{
    let {email,pass}=req.body
    const user=await UserModel.create({
        email,pass
    })
    res.redirect("/");
    
})

app.get("/data",async (req,res)=>{
    
    let data = await UserModel.find()
    console.log(data)
    res.send(data)
    // res.render("DataMaping.ejs",{data})
})

app.delete("/delete/:deepak",async(req,res)=>{
    let {deepak} = req.params
    await UserModel.findByIdAndDelete(deepak)
    res.send("User Deleted Successfully")
})


app.post("/delete/:deepak",async(req,res)=>{
    let {deepak} = req.params
    await UserModel.findByIdAndDelete(deepak)
    res.redirect("/data")
})


app.listen(9090,()=>{
    connect()
    console.log("port running on 9090");
    
})