const express = require("express");
const connect = require("./Config/server");
const UserModel = require("./Model/UserModel");
const RegisterData = require("./Controller/UserController");
const ProductModel = require("./Model/ProductModel");
const AddProduct = require("./Controller/ProductController");
const UserRoute = require("./Routes/UserRoute");
const ProductRoute = require("./Routes/ProductRoute");

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.use("/user",UserRoute)
app.use("/product",ProductRoute)

app.listen(8080,()=>{
    connect()
    console.log("Server is Connected on port 8080")
})