import React from 'react'
import {useNavigate} from "react-router-dom"


function Welcome() {
    const navigate = useNavigate()

    function handleClient() {
        navigate('login')

    }
    
    function handleDoc() {
        navigate('doclogin')
    
    }
    




    return (
        <div>
            <div id ='client-div' onClick={handleClient}>
                Client
            </div>
            <div id = 'doc-div' onClick={handleDoc}>
                Doctor
            </div>
        </div>
    )
}

export default Welcome