import React from 'react'
import { useState } from 'react'

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
        // AUTH here
        e.preventDefault()
        setData({
            user: "",
            pass: ""
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <span>Login</span>
            <input onChange={changeHandler} name='user' placeholder='Username' value={formData.user}></input>
            <input onChange={changeHandler} name='pass' placeholder='Password' type='password' value={formData.pass}></input>
            <input onChange={changeHandler} type='submit'></input>
        </form>
    )
}
export default Login