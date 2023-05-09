import React from 'react'
import { useState } from 'react'

function DocLogin() {

    // #region controlled form
    const [formData, setData] = useState(
        {
            email: "",
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
            email: "",
            pass: ""
        })
    }

    // add 2FA for this login via email

    return (
        <form onSubmit={submitHandler}>
            <span>DocLogin</span>
            <input onChange={changeHandler} name='email' type='email' placeholder='E-Mail' value={formData.email}></input>
            <input onChange={changeHandler} name='pass' type='password' placeholder='Password' value={formData.pass}></input>
            <input type='submit'></input>
        </form>
    )
}

export default DocLogin