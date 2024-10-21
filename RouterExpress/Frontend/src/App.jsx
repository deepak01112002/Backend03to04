import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   const [username,setUsername] = useState("")

  return (
    <>
      <form action="">
           <input type="text" placeholder='username'  />
           <input type="text" placeholder='Email' />
           <input type="text" placeholder='Password' />
           <input type="submit" />
      </form>
    </>
  )
}

export default App
