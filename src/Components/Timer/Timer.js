import React, { useState, useEffect } from 'react'

import { TimerText, TimerContainer, StartButton, ResetButton, StopButton, ButtonContainer, Form, Checkbox, CheckboxContainer, InputCheckBox, TextArea, SubmitButton, LineBreak, TextInput } from '../../Styles'

function Timer({ retrievedList, setRetrievedList }) {

    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [hours, setHours] = useState('00')
    const [counter, setCounter] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [textboxValue, setTextboxValue] = useState('')
    const [textInputValue, setTextInputValue] = useState('')
    const [checked, setChecked] = useState('')
    const [list, setList] = useState([{ work: 'Working on Timer', hours:'01', minutes:'32', seconds:'47', notes:'I am finishing up the Sidebar styling', tag:'project'}])

    // Start Timer
    useEffect(() => {
        let intervalId

        if(isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60
                const minuteCounter = Math.floor(counter / 60)
                const hourCounter = Math.floor(minuteCounter / 60)

                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : `${secondCounter}`
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter
                const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}` : `${hourCounter}`

                setSeconds(computedSecond)
                setMinutes(computedMinute)
                setHours(computedHour)

                setCounter(counter => counter + 1)
            }, 1000)
        }

        return () => clearInterval(intervalId)

    }, [isActive, counter])

    // Reset Timer
    const resetTimer = () => {
        setCounter(0)
        setSeconds('00')
        setMinutes('00')
        setHours('00')
    }

    // Stop Timer
    const stopTimer = () => {
        setIsActive(false)
    }

    // Capture Info
    const captureInfo = (e) => {
        e.preventDefault()

        let copy = [...list]

        copy = [...copy, {
            work: textInputValue,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            notes: textboxValue,
            tag: checked,
        }]

        setList(copy)
        setRetrievedList(copy)
    }

    // Handle the Checkbox data
    const handleCheck = (e) => {
        if (checked !== ''){
            setChecked('')
        } else {
           setChecked(e.target.name) 
        }
        
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
            <LineBreak />
            <Form>
                <TextInput type='text' placeholder='What did you do?' value={textInputValue} onChange={(e) => setTextInputValue(e.target.value)} />
                <CheckboxContainer>
                    <Checkbox>
                        <InputCheckBox  boxName="Projects" type="checkbox" name="projects" onChange={handleCheck}></InputCheckBox>
                    </Checkbox>
                    <Checkbox>
                        <InputCheckBox boxName="T.O.P" type="checkbox" name="odin" onChange={handleCheck}></InputCheckBox>
                    </Checkbox>
                    <Checkbox>
                        <InputCheckBox boxName="Video Tutorial" type="checkbox" name="video-tutorials" onChange={handleCheck}></InputCheckBox>
                    </Checkbox>
                </CheckboxContainer>
                <TextArea value={textboxValue} onChange={(e) => setTextboxValue(e.target.value)}/>
                <SubmitButton onClick={captureInfo}>Submit</SubmitButton>
            </Form>
        </TimerContainer>
    )
}

export default Timer
