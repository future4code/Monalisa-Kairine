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

export const ContainerCreateTrip = styled.div`  
 display: flex;
 flex-direction: column;
 align-items: center;
 `      

export const Input = styled.input`
width: 350px;
margin: 5px;
height: 20px;
justify-content: center;
border-radius: 5px;
border: 1px solid black;
outline: none;
display: block;

::placeholder{
 text-align: center;
}
`    

export const InputDescription = styled.input`
 width: 350px;
 height: 60px;
 border: 1px solid black;
 border-radius: 5px;
 display: block;
 margin:5px;

 ::placeholder{
  text-align: center;
 }
 `  

export const PlanetSelect = styled.select` 
 width: 350px;
 margin: 5px;
 height: 20px;
 border-radius: 5px;
 border: 1px solid black;
 outline: none;

 ::placeholder{
  text-align: center;
 }
`       

export const Button = styled.button`
display: grid;
 cursor: pointer;
 outline: none;
 background: transparent;
 font-size: 16px;
 border-radius: 12px;
 color: black;
 border: 2px solid black;
 margin:  20px 16px;
 padding: 0.25em 1em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: black;
}
` 

export const ButtonContainer = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 20px;
 `   
