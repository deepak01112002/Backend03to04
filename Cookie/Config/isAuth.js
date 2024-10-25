 const isAuth = (req,res,next)=>{
    if(req.isAuthenticated()){
    next()
    }else{
      res.redirect("/user/register")
    }
 }

 module.exports = isAuth