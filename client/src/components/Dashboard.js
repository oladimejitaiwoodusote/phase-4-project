import React from 'react'
import ApptContainer from './ApptContainer'
import PetContainer from './PetContainer'
import {useNavigate} from "react-router-dom"

function Dashboard({owner, logout}) {
    const navigate = useNavigate()
    
    // console.log(owner)
    // if (owner === null){
    //     navigate('/')
    // }
    
    return (
        <div id='dash-div'>
            <button className='logout' onClick={logout}>Logout</button>
            <ApptContainer owner={owner} />
            <PetContainer owner={owner}/>
        </div>
    )
}

export default Dashboard