import React from 'react'

function PetCard({ pet }) {

    function clickHandler(e) {

    }

    return (
        <div onClick={clickHandler}>
            <span>{ pet.name }, { pet.pet_type }</span>
        </div>
    )
}

export default PetCard