const jwt = require("jsonwebtoken")

const verify = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    console.log(token)
    if(token){
       let decode = jwt.verify(token, "deepakpandey")
       req.user = decode
       next()
    }else{
        res.send({msg : "Login FIrst"})
    }
}

const auth = (req,res,next)=>{
   if(req.user.userRole == "admin"){
      next()
   }else{
     
   }
}

module.exports = verify