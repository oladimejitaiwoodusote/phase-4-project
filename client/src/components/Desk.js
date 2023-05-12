import React, {useState} from 'react'
import ApptContainer from './ApptContainer'
import DisplayPet from './DisplayPet'

function Desk({doctor,logout}) {
    const [pet_appointment, setPetAppointment] = useState(null)
    const [appointment, setAppointment] = useState(null)
    if(doctor){
    return (
        <>
            <button onClick={logout}>Logout</button>
            <div>
        <h1>Welcome Dr, {doctor.name}</h1>
        {pet_appointment ? <DisplayPet pet_appointment={pet_appointment} setPetAppointment={setPetAppointment} appointment={appointment}/>:
        <ApptContainer doctor={doctor} pet_appointment={pet_appointment} setAppointment={setAppointment} setPetAppointment={setPetAppointment}/>}
        </div>
        </>
    )
    }

    else {
        return "LOADING..."
    }
}

export default Desk