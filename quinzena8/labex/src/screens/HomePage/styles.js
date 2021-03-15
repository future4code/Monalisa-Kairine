import styled from "styled-components"


export const Button = styled.button`
 cursor: pointer;
 outline: none;
 background: transparent;
 font-size: 16px;
 border-radius: 8px;
 color: black;
 border: 2px solid black;
 margin:  20px;
 padding: 0.25em 1em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: black;
}
` 

export const Container = styled.div`
 display: grid;
 grid-template-rows: auto auto;
 justify-content: center;
 text-align: center;
 align-items: center;
 height: 100vh;
`
export const ContainerButtons = styled.div`
 display: grid;
 grid-template-columns: auto auto;
 justify-content: center;
 align-items: center;
`

export const ContainerLogo = styled.div`
display: grid;

h1{
  font-size: 4em;
}

`
export const Logo = styled.img`
width: 280px;
display: grid;
`
