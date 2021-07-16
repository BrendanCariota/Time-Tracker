import styled from 'styled-components'

const darkBlue = '#03003F'
const biege = '#fff0e5'
const lightGreen = '#45D972'
const lightRed = '#D94545'
const lightPurple = '#6400e4'

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

export const Sidebar = styled.section`
  padding: 4em;
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
    margin: 5rem 0;
    flex-direction: column;
`

export const ButtonContainer = styled(TimerContainer)`
    margin: 3rem 0;
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

