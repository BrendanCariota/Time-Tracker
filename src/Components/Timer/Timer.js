import React from 'react'

import { TimerText, TimerContainer, StartButton, ResetButton, ButtonContainer } from '../../Styles'

function Timer() {
    return (
        <TimerContainer>
            <TimerText>00:00:00</TimerText>
            <ButtonContainer>
                <StartButton>Start</StartButton>
                <ResetButton>Reset</ResetButton>
            </ButtonContainer>
        </TimerContainer>
    )
}

export default Timer
