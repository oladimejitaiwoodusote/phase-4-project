import React from 'react'
import ApptCard from './ApptCard'
import { useEffect, useState } from 'react'

function ApptContainer({owner, doctor, pet_appointment, setPetAppointment, setAppointment}) {

    const [arr, setArr] = useState([])
    

    // pass doctor prop from App > Desk
    useEffect(() => {
        if(owner) {
            fetch(`/owner-appointments/${owner.id}`)
            .then(response=> {
                if(response.ok) {
                    response.json()
                    .then(data => setArr(data))
                }
                
            })
           
        }

        else if(doctor) {
            fetch(`doctor-appointments/${doctor.id}`)
            .then(response=> {
                if(response.ok) {
                    response.json()
                    .then(data=> setArr(data))
                }
            })
            

        }
    },[owner, doctor, pet_appointment])
        
    const cardArr = arr.map(appt => <ApptCard key={appt.id} owner={owner} setPetAppointment={setPetAppointment} doctor={doctor} appt={appt} setAppointment={setAppointment}/>)

    return (
        <div>
            <h3>Appointments</h3>
            {cardArr.length ? <ol> {cardArr} </ol>: "No appointments"}
        

        </div>
    )
}

export default ApptContainer