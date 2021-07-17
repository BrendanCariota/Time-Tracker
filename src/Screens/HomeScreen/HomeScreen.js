import React from 'react'

import {HomePage, Title, Subtitle, Container, Sidebar } from '../../Styles'

// Components
import Timer from '../../Components/Timer/Timer'

function HomeScreen() {
    return (
        <HomePage>
            <Sidebar>

            </Sidebar>
            <Container>
                <Title>Timer</Title>
                <Timer />
            </Container>
            
        </HomePage>
    )
}

export default HomeScreen
