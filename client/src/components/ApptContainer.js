import React from 'react'
import ApptCard from './ApptCard'
import { useEffect, useState } from 'react'

function ApptContainer() {

    const [arr, setArr] = useState([])

    // pass doctor prop from App > Desk
    useEffect(() => {
        fetch('/doctors/3')
        .then(r => r.json())
        .then(data => setArr(data))
    }, [])

    const cardArr = arr.map(appt => <ApptCard key={appt.id} type={appt.type}/>)

    return (
        <div>
            { cardArr }
        </div>
    )
}

export default ApptContainer