const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
const connect = require("./Config/Database")
const UserModel = require("./model/usermodel")
const multer = require("multer")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


const s = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../Day5/public"))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const Data = multer({ storage: s })




app.get("/", (req, res) => {
    res.render("index")
})
app.post("/form", Data.single("image"), async (req, res) => {
    console.log(req.file)
    if (req.file) {
        const user = await UserModel.create({
            ...req.body,
            image: req.file.filename
        })
    } else {
        const user = await UserModel.create(req.body)
    }
    res.redirect("/data");

})

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

app.post("/edit/:d",Data.single("image"),async (req, res) => {
    console.log(req.params.d)
    await UserModel.findByIdAndUpdate(req.params.d, req.body)
    res.redirect("/data")
})





app.listen(9090, () => {
    connect()
    console.log("port running on 9090");

})