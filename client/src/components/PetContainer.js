import React from 'react'
import PetCard from './PetCard'
import { useState, useEffect } from 'react'

function PetContainer({user}) {

    const [pets, setPets]= useState([])

    useEffect(()=> {
        fetch(`/user-pets/${user.id}`)
        .then(response => response.json())
        .then(data=> setPets(data))

    }, [])

    const clientPets = pets.map(pet=> <PetCard key={pet.id} pet={pet}/>)
    
    return (
        <div> 
            <h1>Pet Container</h1>
        </div>
    )
}

export default PetContainer