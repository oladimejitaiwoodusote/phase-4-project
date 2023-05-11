import React from 'react'
import {useNavigate} from "react-router-dom"
import ownerImg from "../owner-img.jpg"
import doctorImg from "../doctor-img.jpg"


function Welcome() {
    const navigate = useNavigate()

    function handleClient() {
        navigate('login')

    }
    
    function handleDoc() {
        navigate('doclogin')
    
    }
    
    return (
        <>
            <div id="welcome-message">Hello! Are you a...</div>
            <div id="welcome-div">
                <div className='welcome-clickable' id="owner-clickable" onClick={handleClient}>
                    Pet Owner
                </div>
                <div className='welcome-clickable' id="doctor-clickable" onClick={handleDoc}>
                    Doctor
                </div>
                <img id='owner-img' alt='owner' src={ownerImg}></img>
                <img id='doc-img' alt='doctor' src={doctorImg}></img>
            </div>
        </>
    )
}

export default Welcome