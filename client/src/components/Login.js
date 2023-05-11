import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login({attemptLogin, currentOwner, logout}) {

    // #region controlled form
    const [formData, setData] = useState(
        {
            username: "",
            password: ""
        }
    )

    function changeHandler(e) {
        setData({...formData, [e.target.name]: e.target.value})
    }

    // #endregion

    function submitHandler(e) {
        // prevent navigate if login invalid
        e.preventDefault()
        attemptLogin(formData)
        setData({
            username: "",
            password: ""
        })
        //navigate("/dashboard")
    }
    
    const navigate = useNavigate()

    function clickHandler() {
        navigate("/signup")
    }

    useEffect(()=>{
        if (currentOwner){
            navigate("/dashboard")
        }
    },[currentOwner])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <span>Login</span>
                <input onChange={changeHandler} name='username' placeholder='Username' value={formData.username}></input>
                <input onChange={changeHandler} name='password' placeholder='Password' type='password' value={formData.password}></input>
                <input onChange={changeHandler} type='submit'></input>
                {currentOwner? <button onClick={logout}>Logout</button>: null}
            </form>
            <button onClick={clickHandler}>Sign Up</button>
        </div>
    )
}
export default Login