import React from 'react'
import ApptContainer from './ApptContainer'
import PetContainer from './PetContainer'

function Dashboard({owner}) {
    return (
        <div>
            <ApptContainer owner={owner} />
            <PetContainer />
        </div>
    )
}

export default Dashboard