import React from 'react'
import { useState } from 'react'

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
    
    function confirmHandler(e) {
        return
    }

    function submitHandler(e) {
        // AUTH here
        e.preventDefault()
        setData({
            email: "",
            user: "",
            pass: ""
        })
    }
    
    // add password validations (must contain letter number special character, must match confirm)

    return (
        <form onSubmit={submitHandler}>
            <span>Signup</span>
            <input onChange={changeHandler} placeholder='E-Mail' type='email' name='email' value={formData.email}></input>
            <input onChange={changeHandler} placeholder='Username' name='user' value={formData.user}></input>
            <input onChange={changeHandler} placeholder='Password' type='password' name='pass' value={formData.pass}></input>
            <input onChange={confirmHandler} placeholder='Confirm Password' type='password'></input>
            <input type='submit'></input>
        </form>
    )
}

export default Signup