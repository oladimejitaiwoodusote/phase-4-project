import React from 'react'
import ApptContainer from './ApptContainer'

function Desk({doctor, logout}) {
    return (
        <>
            <button onClick={logout}>Logout</button>
            <ApptContainer doctor={doctor}/>
        </>
    )
}

export default Desk