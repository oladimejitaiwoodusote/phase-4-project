import React from 'react'
import ApptCard from './ApptCard'
import { useEffect, useState } from 'react'

function ApptContainer() {

    const [arr, setArr] = useState([])

    useEffect(() => {
        fetch('/doctors/1')
        .then(r => console.log(r))
        // .then(data => setArr(data))
    }, [])

    const cardArr = arr.map(appt => <ApptCard id={appt.id} type={appt.type}/>)

    return (
        <div>
            { cardArr }
        </div>
    )
}

export default ApptContainer