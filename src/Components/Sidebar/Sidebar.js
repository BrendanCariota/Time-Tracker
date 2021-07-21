import React from 'react'
import TimedEvent from '../TimedEvent/TimedEvent'

import { SidebarContainer } from '../../Styles'

function Sidebar({ retrievedList }) {

    return (
        <SidebarContainer>
            {
                retrievedList.map((item, i) => (
                    <TimedEvent 
                        key={i} 
                        title={item.work} 
                        hours={item.hours} 
                        minutes={item.minutes} 
                        seconds={item.seconds} 
                        notes={item.notes}
                        tag={item.tag}
                    />
                    // <div key={i}>
                    //     <h1>{item.work}</h1>
                    //     <h3>{item.hours}:{item.minutes}:{item.seconds}</h3>
                    //     <p>{item.notes}</p>
                    //     <p>{item.tag}</p>
                    // </div>
                ))
            }
        </SidebarContainer>
    )
}

export default Sidebar
