import React from 'react'
import { useState } from 'react'

function DocLogin({attemptLogin}) {

    // #region controlled form
    const [formData, setData] = useState(
        {
            password: "",
            username: "",
            email: ""
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
            password: "",
            username: "",
            email: ""
        })
    }

    // add 2FA for this login via email

    return (
        <form onSubmit={submitHandler}>
            <span>DocLogin</span>
            <input onChange={changeHandler} name='username'  placeholder='username' value={formData.username}></input>
            <input onChange={changeHandler} name='password' type='password' placeholder='Password' value={formData.password}></input>
            <input type='submit'></input>
        </form>
    )
}

export default DocLogin