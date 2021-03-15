import styled from 'styled-components'

export const DivDetailsCard = styled.div`
display: flex;
flex-wrap: wrap;
background-color: rgb(202, 204, 206, 0.5);
font-weight: bold;
font-family: "Julius Sans One", sans-serif;
`;
export const TitleNoApply = styled.h5`
text-align: center;
font-weight: bold;
padding-right: 20px;
`;
export const DivNoApply = styled.div`
display: flex;
margin: 3em auto;
align-items: center;
@media (min-device-width: 320px) and (max-device-width: 420px) {
  flex-direction: column;
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