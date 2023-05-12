import React from 'react'

function ApptCard({appt, owner, setPetAppointment, doctor}) {

    function handleClick() {
        fetch(`appointment-pet/${appt.id}`)
        .then(response=> response.json())
        .then(data=>setPetAppointment(data))
       
    }

    if(owner) {
        return (
            <li>{appt.type}</li>
        )
    }

    else if(doctor) {
        return <li onClick={handleClick}>{appt.type}</li>
    }
   
    
    }

export default ApptCard