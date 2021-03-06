import React, { useState } from 'react'

import Sidebar from '../../Components/Sidebar/Sidebar'

import {HomePage, Container } from '../../Styles'

// Components
import Timer from '../../Components/Timer/Timer'

function HomeScreen() {

    const [retrievedList, setRetrievedList] = useState([])

    return (
        <HomePage>
            <Sidebar retrievedList={retrievedList}/>
            <Container>
                <Timer retrievedList={retrievedList} setRetrievedList={setRetrievedList}/>
            </Container>
            
        </HomePage>
    )
}

export default HomeScreen
