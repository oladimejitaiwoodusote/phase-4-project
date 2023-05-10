import React from 'react'
import { useState } from 'react'

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
    
    function confirmHandler(e) {
        return
    }
    
    function submitHandler(e) {
        // AUTH here
        attemptSignup(formData)
        e.preventDefault()
        setData({
            email: "",
            name: "",
            username: "",
            password: ""
        })
    }
    
    // add password validations (must contain letter number special character, must match confirm)

    return (
        <form onSubmit={submitHandler}>
            <span>Signup</span>
            <input onChange={changeHandler} placeholder='E-Mail' type='email' name='email' value={formData.email}></input>
            <input onChange={changeHandler} placeholder='Name' name='name' value={formData.name}></input>
            <input onChange={changeHandler} placeholder='Username' name='username' value={formData.username}></input>
            <input onChange={changeHandler} placeholder='Password' type='password' name='password' value={formData.password}></input>
            {/*<input onChange={confirmHandler} placeholder='Confirm Password' type='password'></input>*/}
            <input type='submit'></input>
        </form>
    )
}

export default Signup