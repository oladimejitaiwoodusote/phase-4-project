import React from 'react'
import ApptCard from './ApptCard'
import { useEffect, useState } from 'react'

function ApptContainer({owner, doctor}) {

    const [arr, setArr] = useState([])

    // pass doctor prop from App > Desk
    useEffect(() => {
        if(owner) {
            fetch(`/owner-appointments/${owner.id}`)
            .then(response=> response.json())
            .then(data => setArr(data))
        }

        else if(doctor) {
            fetch(`doctor-appointments/${doctor.id}`)
            .then(response=> response.json())
            .then(data => setArr(data))

        }
    })
        

        
        

    const cardArr = arr.map(appt => <ApptCard key={appt.id} appt={appt}/>)
    console.log(cardArr)

    return (
        <div>
            <h3>Appointments</h3>
            {cardArr.length ? cardArr: "No appointments"}
        </div>
    )
}

export default ApptContainer