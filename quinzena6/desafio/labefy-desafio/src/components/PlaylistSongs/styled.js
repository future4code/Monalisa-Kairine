import styled from "styled-components";
import { Colors } from "../../constants/index"


export const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TrackCreationForm = styled.form`
    width: 100vw;
    height: auto;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto auto;
    justify-content: space-around;
    background-color: #e4e7eb;
    padding-bottom: 20px;

    @media only screen and (max-width: 800px) {
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: auto; 
  }  

    div {
        display: grid;
        text-align: center;
        grid-template-columns: auto;
        text-align: center;
        grid-gap: 4px;
        grid-template-rows: auto auto;
    }

    h3{
        grid-column: 1/-1
    }
`

export const Button = styled.button`
    margin-top: 24px;
    color: ${Colors.buttonLetter};
    font-size: 1em;
    border: 2px solid ${Colors.buttonBorder};
    border-radius: 4px;
`