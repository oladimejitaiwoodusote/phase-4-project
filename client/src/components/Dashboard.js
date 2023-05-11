import React from 'react'
import ApptContainer from './ApptContainer'
import PetContainer from './PetContainer'

function Dashboard({owner}) {
    if(owner) {
        return (
            <div>
                <h1>Welcome, {owner.name}</h1>
                <ApptContainer owner={owner} />
                <br></br>
                <PetContainer owner ={owner}/>
                
            </div>
        )
    }
    else{
        return <p>LOADING...</p>
    }
}

export default Dashboard