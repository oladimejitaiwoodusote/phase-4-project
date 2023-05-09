import Welcome from './components/Welcome';
import Login from "./components/Login"
import Signup from './components/Signup'
import DocLogin from './components/DocLogin'
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"

function App() {
  return (
    <>
      <Routes>
        <Route path ='/' element ={<Welcome/>}/>
        <Route path ='login' element ={<Login/>}/>
        <Route path ='signup' element ={<Signup/>}/>
        <Route path ='doclogin' element ={<DocLogin/>}/>
      </Routes>
      
    </>
  );
}

export default App;
