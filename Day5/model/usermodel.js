const mongoose=require("mongoose")

    // mongoose.connect("mongodb://127.0.0.1:27017/users")

    const userSchima=mongoose.Schema({
        email:String,
        pass:String
    })
    const UserModel = mongoose.model('user',userSchima);

    module.exports= UserModel