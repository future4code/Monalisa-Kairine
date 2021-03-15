import styled from "styled-components"


export const ButtonContainer = styled.div`
 display: flex;
 flex-direction: wrap;
` 

export const ApplyButton = styled.button`
  background: transparent;
  color: black; 
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 24px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  :hover {
  background-color: #2a9d8f;
  color: black;
}

`

export const DivTripCard = styled.div`
display: grid;
grid-template-rows: auto auto;
margin: 10px auto;
padding: 30px;
text-align: center;
align-content: space-between;
justify-content: center;
height: 500px;
`;