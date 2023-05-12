import React from 'react'

function ApptCard({appt, owner, setDiv, showDiv, setPetAppointment, doctor}) {

    function handleClick() {
        fetch(`appointment-pet/${appt.id}`)
        .then(response=> response.json())
        .then(data=>setPetAppointment(data))
        setDiv(!showDiv)
    }

    if(owner) {
        return (
            <li className='appt-card'>{appt.type}</li>
        )
    }

    else if(doctor) {
        return <li className='appt-card' onClick={handleClick}>{appt.type}</li>
    }
   
    
    }

export default ApptCard