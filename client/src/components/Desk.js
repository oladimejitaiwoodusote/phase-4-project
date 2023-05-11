import React, {useState} from 'react'
import ApptContainer from './ApptContainer'
import DisplayPet from './DisplayPet'

function Desk({doctor}) {
    const [pet_appointment, setPetAppointment] = useState(null)
    if(doctor){
    return (
        <div>
        <h1>Welcome Dr, {doctor.name}</h1>
        {pet_appointment ? <DisplayPet pet_appointment={pet_appointment} setPetAppointment={setPetAppointment}/>:
        <ApptContainer doctor={doctor} pet_appointment={pet_appointment} setPetAppointment={setPetAppointment}/>}
        </div>
    )
    }

    else {
        return "LOADING..."
    }
}

export default Desk