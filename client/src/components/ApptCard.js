import React from 'react'

function ApptCard({appt, owner, setPetAppointment, setAppointment, doctor}) {

    function handleClick() {
        fetch(`appointment-pet/${appt.id}`)
        .then(response=> response.json())
        .then(data=> {
            setPetAppointment(data)
            setAppointment(appt)
        })
       
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