import styled from 'styled-components'

export const HomePage = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-color: lightblue;
`

export const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: palevioletred;
`

export const Subtitle = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

export const Container = styled.section`
  padding: 4em;
  margin: 2rem;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 3px;
  width: 100%;
  -webkit-box-shadow: -11px 11px 0px -4px #000000; 
  box-shadow: -11px 11px 0px -4px #000000;
`;

export const Sidebar = styled.section`
  padding: 4em;
  margin: 2rem 0 2rem 2rem;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 3px;
  width: 25%;
  -webkit-box-shadow: -11px 11px 0px -4px #000000; 
  box-shadow: -11px 11px 0px -4px #000000;
`;

// TIMER STYLES

export const TimerContainer = styled.p`
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
`

export const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    width: 150px;
    height: 50px;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`

export const StartButton = styled(Button)`
  color: darkGreen;
  border-color: darkGreen;
`;

export const ResetButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

