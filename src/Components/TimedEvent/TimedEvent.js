import React from 'react'

import { TimedEventContainer, TimedEventTitle, TimedEventTitleContainer, TimedEventTime, TimedEventNotes, TimedEventTag } from '../../Styles'

function TimedEvent({ title, hours, minutes, seconds, tag, notes}) {
    return (
        <TimedEventContainer>
            <TimedEventTitleContainer>
                <TimedEventTitle>{title}</TimedEventTitle>
                <TimedEventTag>{tag}</TimedEventTag>
            </TimedEventTitleContainer>
            
            <TimedEventTime>{hours}:{minutes}:{seconds}</TimedEventTime>
            <TimedEventNotes>{notes}</TimedEventNotes>
        </TimedEventContainer>
    )
}

export default TimedEvent
