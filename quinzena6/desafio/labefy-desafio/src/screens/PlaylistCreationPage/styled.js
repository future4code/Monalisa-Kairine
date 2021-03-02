import styled from "styled-components";
import {Colors} from "../../constants/index"



export const PlaylistCreationFormContainer = styled.div` 
    background-color: white;
    width:100vw;
    max-height:100vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1{

        font-size: 2em;
    }

`

export const PlaylistCreationForm = styled.form`
    display: flex;
    height: 40vh;
    padding: 1em;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


`

export const Input = styled.input`
  padding: 0.4em;
  background: ${Colors.inputBackground};
  border: none;
  width: 30vw;
  border-radius: 3px;

  ::placeholder{
      text-align:center;
      color: ${Colors.inputPlaceholder};
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    position: relative;
    width: 60vw;
  }
  `

export const Button = styled.button`
    display: flex;
    color: ${Colors.buttonLetter};
    font-size: 1em;
    padding: 0.4em;
    border: 2px solid ${Colors.buttonBorder};
    border-radius: 4px;
`