import React, {useState} from 'react'

function PetCard({ pet }) {

    const [showImage, setShow] = useState(false)

    function clickHandler(e) {
        setShow(!showImage)
    }

    console.log(pet)

    return (
        <div onClick={clickHandler}>
            <h3>{pet.name}</h3>
            <img className = "pet-image" src={pet.image}></img>
            {showImage? <div>
                            <h1>Type: {pet.pet_type}</h1>
                            <h1>Weight: {pet.weight} lbs</h1>
                        </div>
            :null}
        </div>
    )
}

export default PetCard