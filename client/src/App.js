import Welcome from './components/Welcome';
import Login from "./components/Login"
import Signup from './components/Signup'
import DocLogin from './components/DocLogin'
import Desk from './components/Desk';
import Dashboard from './components/Dashboard';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {

  const [currentOwner, setCurrentOwner] = useState(null)
  const [currentDoctor, setCurrentDoctor] = useState(null)
 
  useEffect(()=>{
    fetch('/check_session')
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          if (data["type"] === "owner"){
            setCurrentOwner(data["data"])
          }
          else if(data["type"] === "doctor"){
            setCurrentDoctor(data["data"])
          }
        })
      }
    })
  },[])


  function attemptLoginOwner(ownerData){
    fetch('/ownerlogin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(ownerData)
    })
    .then(response => {
      if (response.ok){
        response.json()
        .then( data => setCurrentOwner(data))
      }
      else {
        response.json()
        .then( data => alert(data.message))
      }
    })
  }

  function attemptLoginDoctor(doctorData){
    fetch('/doctorlogin',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(doctorData)
    })
    .then(response => {
      if (response.ok) {
        response.json()
        .then(data => setCurrentDoctor(data))
      }
      else {
        response.json()
        .then(data => alert(data.message))
      }
    })
  }

  function attemptSignup(ownerData){
    fetch('/ownercreate',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(ownerData)
    })
    .then(response => response.json())
    .then(data => setCurrentOwner(data))
  }

  function ownerLogout(){
    setCurrentOwner(null)
    fetch('/owner_logout',{
      method: 'DELETE'
    })
  }

  function doctorLogout(){
    setCurrentDoctor(null)
    fetch('/doctor_logout',{
      method: 'DELETE'
    })
  }


  return (
    <>
      <Routes>
        <Route path ='/' element ={<Welcome/>}/>
        <Route path ='login' element ={<Login attemptLogin={attemptLoginOwner} currentOwner={currentOwner} logout={ownerLogout}/>}/>
        <Route path ='signup' element ={<Signup attemptSignup={attemptSignup}/>}/>
        <Route path ='doclogin' element ={<DocLogin attemptLogin={attemptLoginDoctor} currentDoctor={currentDoctor} logout={doctorLogout}/>}/>
        <Route path ='dashboard' element ={<Dashboard/>}/>
        <Route path ='desk' element ={<Desk/>}/>
      </Routes>    
    </>
  );
}

export default App;