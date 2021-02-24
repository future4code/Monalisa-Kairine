import styled from "styled-components";
import { Colors } from "../../constants/index"

export const PlaylistCardContainer = styled.div`
margin: 20px;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: auto;
align-items: center;
text-align: center;
justify-content: center;
`
export const NameContainer = styled.p`
margin: 10px;
`
export const DeleteButton = styled.img`
height: 32px;
`
export const Button = styled.button`
    display: flex;
    color: ${Colors.buttonLetter};
    font-size: 1em;
    padding: 0.4em;
    border: 2px solid ${Colors.buttonBorder};
    border-radius: 4px;
`