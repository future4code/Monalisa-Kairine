import React from "react";
import PerguntaAberta from "./PerguntaAberta";

class Etapa2 extends React.Component {
    render() {
      return (
        <div>
          <h1>ETAPA 2</h1>
          <PerguntaAberta pergunta={"1 - Qual o seu curso?"}/>
          <PerguntaAberta pergunta={"2 - Qual sua unidade de ensino?"}/>
          <button onClick={this.props.funcaoOnClickProximaEtapa}> Próxima Etapa </button>
        </div>
      );
    }
  }
  
  export default Etapa2;