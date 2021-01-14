import React from "react";
import styled from "styled-components";


const containerCentro = styled.div`
  text-align: center
  margin: auto;
`;

function PerguntaAberta(props) {
    return (
      <div>
        <containerCentro>  
            <p>{props.pergunta}</p>
            <input onChange={props.onChange} value={props.value} />
        </containerCentro>
      </div>
    );
  }

  export default PerguntaAberta