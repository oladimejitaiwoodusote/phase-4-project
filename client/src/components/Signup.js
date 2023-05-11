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
        if (formData.password && confirm) {
            if (formData.password === confirm) {
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
        <div className='login-page' id="owner-login-page">
            <div className='form-div'>
                <h1>Signup</h1>
                <form className='login-form' onSubmit={submitHandler}>
                    <input className='top-input' onChange={changeHandler} placeholder='E-Mail' type='email' name='email' value={formData.email}></input>
                    <input onChange={changeHandler} placeholder='Name' name='name' value={formData.name}></input>
                    <input onChange={changeHandler} placeholder='Username' name='username' value={formData.username}></input>
                    <input onChange={changeHandler} onKeyUp={checkMatch} placeholder='Password' type='password' name='password' value={formData.password}></input>
                    <input onChange={confirmHandler} onKeyUp={checkMatch} placeholder='Confirm Password' type='password' value={confirm}></input>
                    {/* <span>{ valid ? "✔️" : "❌" }</span> */}
                    <input className='bottom-input' type='submit'></input>
                </form>
                <br></br>
                <span>Have an account?</span>
                <button onClick={clickHandler}>Log In</button>
            </div>
        </div>
    )
}

export default Signup