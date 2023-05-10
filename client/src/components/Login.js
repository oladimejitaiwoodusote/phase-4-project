import React from 'react'
import { useState } from 'react'

function Login({attemptLogin}) {

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
        // AUTH here
        e.preventDefault()
        attemptLogin(formData)
        setData({
            username: "",
            password: ""
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <span>Login</span>
            <input onChange={changeHandler} name='username' placeholder='Username' value={formData.username}></input>
            <input onChange={changeHandler} name='password' placeholder='Password' type='password' value={formData.password}></input>
            <input onChange={changeHandler} type='submit'></input>
        </form>
    )
}
export default Login