import Welcome from './components/Welcome';
import Login from "./components/Login"
import Signup from './components/Signup'
import DocLogin from './components/DocLogin'
import Desk from './components/Desk';
import Dashboard from './components/Dashboard';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"

function App() {

  const [currentOwner, setCurrentOwner] = useState(null)
  const [currentDoctor, setCurrentDoctor] = useState(null)

  // useEffect(()=>{
  //   fetch('/check_session')
  //   .then(res => {

  //   })
  // })

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

  return (
    <>
      <Routes>
        <Route path ='/' element ={<Welcome/>}/>
        <Route path ='login' element ={<Login attemptLogin={attemptLoginOwner}/>}/>
        <Route path ='signup' element ={<Signup attemptSignup={attemptSignup}/>}/>
        <Route path ='doclogin' element ={<DocLogin attemptLogin={attemptLoginDoctor}/>}/>
        <Route path ='dashboard' element ={<Dashboard owner={currentOwner}/>}/>
        <Route path ='desk' element ={<Desk doctor={currentDoctor}/>}/>
      </Routes>    
    </>
  );
}

export default App;