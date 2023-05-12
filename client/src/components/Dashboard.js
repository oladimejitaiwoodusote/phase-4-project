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
    if(owner) {
    return (
        <div id='dash-div'>
            <h3>Welcome, {owner.name}</h3>
            <button className='logout' onClick={logout}>Logout</button>
            <ApptContainer owner={owner} />
            <PetContainer owner={owner}/>
        </div>
    )
    }

    else{
        return "LOADING..."
    }
}

export default Dashboard