import Welcome from './components/Welcome';
import Login from "./components/Login"
import Signup from './components/Signup'
import DocLogin from './components/DocLogin'
import Desk from './components/Desk';
import ApptContainer from './components/ApptContainer';
import ApptCard from './components/ApptCard';
import Dashboard from './components/Dashboard';
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
        <Route path ='dashboard' element ={<Dashboard/>}/>
        <Route path ='desk' element ={<Desk/>}/>
      </Routes>
      
    </>
  );
}

export default App;
