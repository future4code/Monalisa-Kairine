import styled from "styled-components";
import imageBack from "../../Assets/background1.jpg"

export const DivHome = styled.div`
  padding-bottom: 2em;
`;

export const TextHome = styled.p`
text-align: justify;
color: #949380;
font-size: 1.2em;
`;

export const TitleHome = styled.h1`
font-size: 4em;
color: black;
`;


export const DivTextHome = styled.div`
text-align: center;
margin: 90px 30px;
padding: 30px 100px;
`;

export const DivImage = styled.div`
  background-image: url(${imageBack});
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 40vh;
`

