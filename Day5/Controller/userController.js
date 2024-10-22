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

const DataLogin = async(req,res)=>{
    
        const {email,password} = req.body
        let data = await UserModel.findOne({email : email})
        if(!data){
           return res.send({msg : "Email Not Registered"})
        }
        if(data && data.password != password){
           return res.send({msg : "Password Wrong"})
        }
        if(data && data.password == password){
        res.cookie("user",data.email).send({msg : "User Login Successfully"})
        }
   
}


module.exports ={
    index,
    DataPost,
    DataLogin
}