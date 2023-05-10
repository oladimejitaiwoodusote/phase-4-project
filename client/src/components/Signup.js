import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Signup() {

    // #region controlled form
    const [formData, setData] = useState(
        {
            email: "",
            user: "",
            pass: ""
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
        e.preventDefault()
        if (valid) {
            setData({
                email: "",
                user: "",
                pass: ""
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
                <input onChange={changeHandler} placeholder='Username' name='user' value={formData.user}></input>
                <input onChange={changeHandler} onKeyUp={checkMatch} placeholder='Password' type='password' name='pass' value={formData.pass}></input>
                <input onChange={confirmHandler} onKeyUp={checkMatch} placeholder='Confirm Password' type='password' value={confirm}></input>
                <span>{ valid ? "✔️" : "❌" }</span>
                <input type='submit'></input>
            </form>
            <button onClick={clickHandler}>Log In</button>
        </div>
    )
}

export default Signup