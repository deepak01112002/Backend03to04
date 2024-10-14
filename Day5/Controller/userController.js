const UserModel = require("../model/usermodel")

const index = (req, res) => {
    res.render("index")
}

const DataPost = async(req, res) => {
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

}


module.exports ={
    index,
    DataPost
}