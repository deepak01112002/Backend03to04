const express = require("express")

const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))
let todo = []


app.get("/",(req,res)=>{
    // res.send("Hello world")
    res.render("index.ejs",{todo})
})

app.get("/adddata",(req,res)=>{
    res.render("add.ejs")
})

app.post("/adddata",(req,res)=>{
    const {task} = req.body
    let obj = {
        id : Date.now() + Math.random() + "",
        task : task,
        completed : false
    }
    todo.push(obj)
    res.redirect("/")
})

app.get("/edit/:id",(req,res)=>{
    const {id} = req.params
    let arr = todo.find((el)=>el.id == id)
    res.render("edit.ejs",{arr})
})


app.post("/edit/:id",(req,res)=>{
     const data = req.body;
     let a = data.completed == "on" ? "True" : "False"
     const {id} = req.params
    //  todo = todo.map((el)=>{
    //     if(el.id == id){
    //         return {...el,task : data.task, completed : a }
    //     }else{
    //         return el;
    //     }
    //  })
    todo.id = data.id
    todo.task = data.task
    todo.completed = a
     res.redirect("/")
})

app.post("/delete/:id",(req,res)=>{
      const {id} = req.params
      todo = todo.filter((el)=>{
        if(el.id != id){
            return el;
        }
      })
      res.send(todo)
})



app.listen(3000,()=>{
    console.log("Server started on 3000")
})