import React from 'react'

function DisplayPet({pet_appointment, setPetAppointment}) {
  return (
    <div>
        <button onClick={()=> setPetAppointment(null)}>CLOSE</button>
        <h3>{pet_appointment.name}</h3>
        <img src={pet_appointment.image} alt ='pet'></img>
    </div>
  )
}

export default DisplayPet