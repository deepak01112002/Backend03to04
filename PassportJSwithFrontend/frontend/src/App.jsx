import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
   const [state,setstate] = useState({
      email : "",
      username : "",
      password : ""
   })
  const handleChange = (e)=>{
     const {name,value} = e.target
     setstate({...state,[name] : value})
  }
  const handleSubmit = (e)=>{
     e.preventDefault()
     axios.post('http://localhost:8080/login',state)
     .then((Res)=>{
      console.log(Res)
     })
     .catch((err)=>{
      console.log(err)
     })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
           <input type="text" name='username' onChange={handleChange}/>
           <input type="text" name='email' onChange={handleChange}/>
           <input type="text" name='password' onChange={handleChange}/>
           <input type="submit"/>
      </form>
    </>
  )
}

export default App
