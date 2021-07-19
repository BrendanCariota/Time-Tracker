import React from 'react'

import { SidebarContainer } from '../../Styles'

function Sidebar({ retrievedList }) {

    console.log(retrievedList)

    return (
        <SidebarContainer>
            {
                retrievedList.map((item, i) => (
                    <div key={i}>
                        <h1>{item.hours}:{item.minutes}:{item.seconds}</h1>
                        <p>{item.notes}</p>
                    </div>
                ))
            }
        </SidebarContainer>
    )
}

export default Sidebar
