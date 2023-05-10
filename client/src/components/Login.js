import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {

    // #region controlled form
    const [formData, setData] = useState(
        {
            user: "",
            pass: ""
        }
    )

    function changeHandler(e) {
        setData({...formData, [e.target.name]: e.target.value})
    }

    // #endregion

    function submitHandler(e) {
        // prevent navigate if login invalid
        e.preventDefault()
        setData({
            user: "",
            pass: ""
        })
        navigate("/dashboard")
    }
    
    const navigate = useNavigate()

    function clickHandler() {
        navigate("/signup")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <span>Login</span>
                <input onChange={changeHandler} name='user' placeholder='Username' value={formData.user}></input>
                <input onChange={changeHandler} name='pass' placeholder='Password' type='password' value={formData.pass}></input>
                <input onChange={changeHandler} type='submit'></input>
            </form>
            <button onClick={clickHandler}>Sign Up</button>
        </div>
    )
}
export default Login