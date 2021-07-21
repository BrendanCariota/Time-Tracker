import styled from 'styled-components'

const darkBlue = '#03003F'
const biege = '#fff0e5'
const lightGreen = '#45D972'
const lightRed = '#D94545'
const lightPurple = '#6400e4'
const checkedColor = '#d3d8ed'

export const HomePage = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-color: ${biege};
`

export const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: ${darkBlue};
`

export const Subtitle = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: ${darkBlue};
`

export const Container = styled.section`
  padding: 4em;
  margin: 2rem;
  background: white;
  border: 1px solid black;
  border-radius: 7px;
  width: 100%;
  -webkit-box-shadow: -11px 11px 0px -4px ${darkBlue}; 
  box-shadow: -11px 11px 0px -4px ${darkBlue};
`;

export const SidebarContainer = styled.section`
  padding: 2em;
  margin: 2rem 0 2rem 2rem;
  background: white;
  border: 1px solid black;
  border-radius: 7px;
  width: 25%;
  -webkit-box-shadow: -11px 11px 0px -4px ${darkBlue}; 
  box-shadow: -11px 11px 0px -4px ${darkBlue};
`

// TIMER STYLES

export const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    flex-direction: column;
`

export const ButtonContainer = styled(TimerContainer)`
    margin: 2rem 0 1rem 0;
    flex-direction: row;
`

export const TimerText = styled.p`
    font-size: 7rem;
    color: ${darkBlue};
`

export const Button = styled.button`
    color: ${darkBlue};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${darkBlue};
    border-radius: 7px;
    width: 150px;
    height: 50px;
    font-size: 1.5rem;
    background-color: white;

    &:hover {
        cursor: pointer;
    }
`

export const StartButton = styled(Button)`
  color: ${lightGreen};
  border-color:  ${lightGreen};
  transition: 0.175s ease-in-out;

  &:hover {
    color: white;
    background-color: ${lightGreen};
  }
`;

export const ResetButton = styled(Button)`
  color: ${lightPurple};
  border-color:  ${lightPurple};
  transition: 0.175s ease-in-out;

  &:hover {
    color: white;
    background-color: ${lightPurple};
  }
`;

export const StopButton = styled(Button)`
  color: ${lightRed};
  border-color:  ${lightRed};
  transition: 0.175s ease-in-out;
  
  &:hover {
    color: white;
    background-color: ${lightRed};
  }
`;

export const LineBreak = styled.hr`
  border: 1px solid ${darkBlue};
  opacity: 15%;
  border-radius: 10px;
  width: 90%;
`

// FORM STYLES

export const Form = styled.form`
  width: 80%;
  height: 300pxpx;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextInput = styled.input`
margin-top: 1.5rem;
  width: 75%;
  height: 50px;
  padding: 10px;
  font-size: 1.75rem;
`

export const CheckboxContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Checkbox = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  line-height: 0;
  font-family: sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${darkBlue};

  > label {
    margin-right: 5px;
  }
`
export const InputCheckBox = styled.input`
    appearance: none;
    background-color: #fafafa;
    border: 2px solid ${darkBlue};
    width: 150px;
    height: 30px;
    padding: 5px;
    border-radius: 3px;

    display: inline-block;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: translateY(1px)
    }

    ::after {
      content: ${props => `"${props.boxName}"`};
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${darkBlue};
      font-weight: bold;
    }

    &:checked {
      background-color: ${checkedColor};
    }
`

export const TextArea = styled.textarea`
  width: 75%;
  height: 200px;
  margin-top: 1.5rem;
  padding: 10px;
`
export const SubmitButton = styled(Button)`
  color: ${darkBlue};
  border-color:  ${darkBlue};
  transition: 0.175s ease-in-out;

  &:hover {
    color: white;
    background-color: ${darkBlue};
  }
`;

// TIMED EVENT
export const TimedEventContainer = styled.div`
  width: 100%;
  background-color: ${biege};
  border-radius: 10px;
`

export const TimedEventTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

export const TimedEventTitle = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  color: ${darkBlue};
  font-size: 1.25rem;
  margin: 10px 5px;
`

export const TimedEventTag = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  color: ${darkBlue};
  font-size: 0.6rem;
  margin: 0 5px;
  padding: 5px;
  border-radius: 2px;
  color: white;
  background-color: ${lightGreen};
`

export const TimedEventTime = styled.h1`
  color: ${darkBlue};
  margin: 0px 15px;
  font-size: 1.5rem;
`

export const TimedEventNotes = styled.p`
  color: ${darkBlue};
  margin: 10px 15px;
  padding-bottom: 10px;
`

