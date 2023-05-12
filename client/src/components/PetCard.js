import React, {useState} from 'react'

function PetCard({ pet, updatePet, setnewPet, newpet }) {

    const [showImage, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [petForm, setPetForm] = useState(
        {
            name: "",
            pet_type: "",
            weight: "",
            image: ""        }
    )



    function clickHandler(e) {
        setShow(!showImage)
    }

    const currentappointments = pet.appointments

    const appointments = currentappointments.map(appointment =>{
        return (<div>                     
                    <li>Doctor:{appointment.doctor}, Type:{appointment.type}</li>
                 </div>)
    })

    function handlePetForm(){
        setShowForm(!showForm)
    }

    function submitHandler(e){
        e.preventDefault()
        fetch(`/pets/${pet.id}`,{
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(petForm)
        })
      .then(setnewPet(!newpet))
    }

    function changeHandler(e){
        setPetForm({...petForm, [e.target.name]: e.target.value})
    }

    return (
        <div className="pet-card" onClick={clickHandler}>
            <button onClick = {handlePetForm}>Edit Pet</button>
            <h3>{pet.name}</h3>
            <img alt='pet' onClick={clickHandler} className = "pet-image" src={pet.image}></img>
            {showImage? <div>
                            <h1>Type: {pet.pet_type}</h1>
                            <h1>Weight: {pet.weight} lbs</h1>
                            <h1>Appointments:</h1>
                            {appointments}
                        </div>
            :null}
            {showForm? 
            <div>
                <form className='login-form' onSubmit={submitHandler}>
                    <input onChange ={changeHandler} value={petForm.name} name = "name" placeholder='Enter pet name'></input>
                    <input onChange={changeHandler} value={petForm.pet_type} name = "pet_type" placeholder='Enter pet type'></input>
                    <input onChange={changeHandler} value={petForm.weight} name = "weight" placeholder='Enter pet weight'></input>
                    <input onChange={changeHandler} value={petForm.image} name = "image" placeholder='Enter pet image'></input>
                    <input type = "submit"></input>
                </form>
            </div>
            
            :null}
        </div>
    )
}

export default PetCard