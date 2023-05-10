import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Signup({attemptSignup}) {

    // #region controlled form
    const [formData, setData] = useState(
        {
            email: "",
            name: "",
            username: "",
            password: ""
        }
    )

    function changeHandler(e) {
        setData({...formData, [e.target.name]: e.target.value})
    }
    
    // #endregion
    
    const [confirm, setConfirm] = useState("")

    function confirmHandler(e) {
        setConfirm(e.target.value)
    }
    
    function submitHandler(e) {
        // AUTH here
        attemptSignup(formData)
        e.preventDefault()

        if (valid) {
            setData({
              email: "",
              name: "",
              username: "",
              password: ""
            })
            setConfirm("")
            setValid(false)
        }
        else {
            return false
        }
    }

    const navigate = useNavigate()

    function clickHandler() {
        navigate("/login")
    }

    const [valid, setValid] = useState(false)

    function checkMatch() {
        if (formData.pass && confirm) {
            if (formData.pass === confirm) {
                setValid(true)
            }
            else {
                setValid(false)
            }
        }
        else {
            setValid(false)
        }
    }

    // add password validations (must contain letter number special character, must match confirm)

    return (

        <div>
            <form onSubmit={submitHandler}>
                <span>Signup</span>
                <input onChange={changeHandler} placeholder='E-Mail' type='email' name='email' value={formData.email}></input>
                <input onChange={changeHandler} placeholder='Name' name='name' value={formData.name}></input>
                <input onChange={changeHandler} placeholder='Username' name='username' value={formData.username}></input>
                <input onChange={changeHandler} onKeyUp={checkMatch} placeholder='Password' type='password' name='password' value={formData.password}></input>
                <input onChange={confirmHandler} onKeyUp={checkMatch} placeholder='Confirm Password' type='password' value={confirm}></input>
                <span>{ valid ? "✔️" : "❌" }</span>
                <input type='submit'></input>
            </form>
            <button onClick={clickHandler}>Log In</button>
        </div>
    )
}

export default Signup