import React, { useState } from 'react'

function Signup() {
    const [state,setState] = useState({
        name : "",
        email : "",
        password : ""
    })
    const handleChange = (e)=>{
             const {name,value} = e.target
             setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
         e.preventDefault()
        fetch(`http://localhost:8080/user/register`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(state)
        })
        .then((Res)=>Res.json())
        .then((Res)=>{
            console.log(Res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='name' onChange={handleChange}/>
            <input type="text" name='email' onChange={handleChange}/>
            <input type="text" name='password' onChange={handleChange}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup