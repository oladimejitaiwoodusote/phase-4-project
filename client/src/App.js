import Welcome from './components/Welcome';
import Login from "./components/Login"
import Signup from './components/Signup'
import DocLogin from './components/DocLogin'
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"

function App() {
  return (
    <>
      <Welcome />
      <Login />
      <Signup />
      <DocLogin />
    </>
  );
}

export default App;
