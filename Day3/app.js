const express = require("express")
const check = require("./Middleware/middleware")

let app = express()



// app.use(check)
app.use(express.static('public'))
app.set("view enjine",'ejs')
app.use(express.urlencoded({extended : true}))




app.get("/",(req,res)=>{
   res.render("index.ejs")
})

app.get("/product",(req,res)=>{
     res.send("Product")
})

app.get('/addcart',check,(req,res)=>{
    res.send("add to cart")
})

app.get("/about",(req,res)=>{
    res.send("about")
})




app.listen(8080,()=>{
    console.log("Server is Running....")
})







