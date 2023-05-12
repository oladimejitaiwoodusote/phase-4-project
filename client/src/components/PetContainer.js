import React from 'react'
import PetCard from './PetCard'
import { useState, useEffect } from 'react'

function PetContainer({ owner }) {

    const [pets, setPets]= useState([])

    useEffect(()=> {
        if (owner){
            fetch(`/owner-pets/${owner.id}`)
            .then(response => response.json())
            .then(data=> setPets(data))
        }
    }, [owner])

    const clientPets = pets.map(pet=> <PetCard key={pet.id} pet={pet}/>)

    console.log(owner)

    return (
        <>
            <h1>Pets</h1>
            <div id="pet-cont"> 
                { clientPets }
            </div>
        </>
    )
}

export default PetContainer