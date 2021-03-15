import styled from "styled-components"

export const PageContainer = styled.div`
 display: grid;
 justify-content: center;
 text-align: center;
 grid-template-rows: auto auto auto auto auto;
`  

export const Title = styled.h1`
  display: grid;
  grid-column: 1 / -1;
  font-weight: 400;
  font-size: 40px;
  justify-content: center;
  color: Black;
  justify-self: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`     

 export const ContainerTripDetails = styled.div`
 display: grid;
 height: auto;
 width: 700px;
 text-align: center;
 padding: 20px;
 border-radius: 4px;
 margin:20px;
 background-color: #f4a261;

 p{
  color: black;
  margin-bottom: 10px;
  font-weight: 400;
 }

 h2{
   padding: 8px;
 }
` 

 export const ContainerCandidates = styled.div`
  display: grid;
  height: auto;
  width: 700px;
  text-align: center;
  padding: 20px;
  border-radius: 4px;
  margin:20px;
  background-color: #2a9d8f;
 h2{
   padding: 8px;
 }
` 

export const CandidateDetails = styled.div`
 height: auto;
 border-bottom: 1px dashed black;
 padding: 20px;
 border-radius: 4px;
 margin:20px;
`

export const ApprovedContainer = styled.div` 
  display: grid;
  height: auto;
  width: 700px;
  text-align: center;
  padding: 20px;
  border-radius: 4px;
  margin:20px;
  background-color: #2a9d8f;
  background-color: #457b9d;

  h4{
    padding: 8px;
  }

  h2{ 
    padding: 8px;
  }
` 
      

export const Button = styled.button`
 cursor: pointer;
 outline: none;
 width: 80px;
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

