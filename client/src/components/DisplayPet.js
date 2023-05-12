import React from 'react'

function DisplayPet({pet_appointment, setPetAppointment, appointment}) {
    function deleteAppointment(){
       fetch(`/appointment-delete/${appointment.id}`, {
        method: 'DELETE'
       })
       .then(setPetAppointment(null))
    }


  return (
    <div>
        <button onClick={()=> setPetAppointment(null)}>CLOSE</button>
        <button onClick={deleteAppointment}>Complete</button>
        <h3>{pet_appointment.name}</h3>
        <img src={pet_appointment.image} alt ='pet'></img>

    </div>
  )
}

export default DisplayPet