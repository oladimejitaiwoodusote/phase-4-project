import React from 'react'
import PetCard from './PetCard'
import { useState, useEffect } from 'react'

function PetContainer({ owner }) {

    const [pets, setPets]= useState([])

    useEffect(()=> {
        fetch(`/owner-pets/5`)
        .then(response => response.json())
        .then(data=> setPets(data))
    }, [])

    const clientPets = pets.map(pet=> <PetCard key={pet.id} pet={pet}/>)

    return (
        <div> 
            { clientPets }
        </div>
    )
}

export default PetContainer