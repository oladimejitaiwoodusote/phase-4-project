import React from 'react'
import ApptContainer from './ApptContainer'

function Dashboard({owner}) {
    return (
        <div>
            <ApptContainer owner={owner} />
        </div>
    )
}

export default Dashboard