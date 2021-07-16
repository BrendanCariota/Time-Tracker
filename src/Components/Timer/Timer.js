import React, { useState, useEffect } from 'react'

import { TimerText, TimerContainer, StartButton, ResetButton, StopButton, ButtonContainer } from '../../Styles'

function Timer() {

    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [hours, setHours] = useState('00')
    const [counter, setCounter] = useState(0)
    const [isActive, setIsActive] = useState(false)

    // Start Timer
    useEffect(() => {
        let intervalId

        if(isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60
                const minuteCounter = Math.floor(counter / 60)
                const hourCounter = Math.floor(minuteCounter / 60)

                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter
                const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}` : hourCounter

                setSeconds(computedSecond)
                setMinutes(computedMinute)
                setHours(computedHour)

                setCounter(counter => counter + 1)
            }, 1000)
        }

        return () => clearInterval(intervalId)

    }, [isActive, counter])


    // Stop Timer
    const stopTimer = () => {
        console.log('stop')
    }

    // Reset Timer
    const resetTimer = () => {
        console.log('reset')
    }

    return (
        <TimerContainer>
            <TimerText>
                <span className="hour">{hours}:</span>
                <span className="minute">{minutes}:</span>
                <span className="seconds">{seconds}</span>
            </TimerText>
            <ButtonContainer>
                <StartButton onClick={() => setIsActive(!isActive)}>Start</StartButton>
                <StopButton onClick={stopTimer}>Stop</StopButton>
                <ResetButton onClick={resetTimer}>Reset</ResetButton>
            </ButtonContainer>
        </TimerContainer>
    )
}

export default Timer
