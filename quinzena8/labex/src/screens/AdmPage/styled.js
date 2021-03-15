import styled from "styled-components";
import { Card } from "react-bootstrap";


//Styled AdmPage

export const DivCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: rgb(202, 204, 206, 0.5);
  font-weight: bold;
  font-family: "Julius Sans One", sans-serif;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }
  @media (min-device-width: 421px) and (max-device-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const TitleAdm = styled.h1`
  font-family: "Julius Sans One", sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  border: 0.5px solid gray;
  border-right: none;
  border-left: none;
  margin: 0px;
  padding: 60px 0 30px 0;
  color: white;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 40px 0;
  }
`;
