import React from 'react'
import { useState } from 'react'

function DocLogin({attemptLogin, currentDoctor, logout}) {

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
        <div className='login-page' id='doctor-login-page'>
            <div className='form-div'>
                <h1>DocLogin</h1>
                <form className='login-form' onSubmit={submitHandler}>
                    <input className='top-input' onChange={changeHandler} name='username'  placeholder='username' value={formData.username}></input>
                    <input onChange={changeHandler} name='password' type='password' placeholder='Password' value={formData.password}></input>
                    <input className='bottom-input' type='submit'></input>
                    {currentDoctor? <button onClick={logout}>Logout</button>: null}
                </form>
            </div>
        </div>
    )
}

export default DocLogin