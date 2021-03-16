import styled from "styled-components"

export const Title = styled.h2`
font-weight: 400;
 font-size: 40px;
 justify-content: center;
 color: Black;
 justify-self: center;
 align-items: center;
 padding-top: 40px;
 padding-bottom: 40px;
`     

export const TripDetailsContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 justify-self: center;
 align-items: center;
`      

export const TripsList = styled.p`
 color: black;
 font-size: 20px;
 margin: 5px;
 padding: 12px;
 width: 400px;

 cursor: pointer;
 &:hover {
   background-color: #2a9d8f;
   color: black;
   border-radius: 10px;
  }
`

export const Button = styled.button`
  background: transparent;
  color: black; 
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 24px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  :hover {
  background-color: #2a9d8f;
  color: black;
}

`
    