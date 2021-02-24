import styled from "styled-components";
import { Colors } from "../../constants/index"

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  max-width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  background-color: ${Colors.headerBackground};

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    height: 30vh;
  };


h1{
    color: ${Colors.headerTitle};
    margin-left: 8px;
    margin-right: 8px;
    font-size: 2em;
}

`

export const ButtonsContainer = styled.div`
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Button = styled.button`
    display: flex;
    color: ${Colors.buttonLetter};
    font-size: 1em;
    padding: 0.4em;
    border: 2px solid ${Colors.buttonBorder};
    border-radius: 4px;
`

export const Img = styled.img`
    width: 50px;
    height: auto;
`

export const LogoContainer = styled.div`
    display: flex;
`