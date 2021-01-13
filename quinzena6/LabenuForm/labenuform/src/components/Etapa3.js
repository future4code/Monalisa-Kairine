import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaSelecionar from "./PerguntaSelecionar";

class Etapa3 extends React.Component {

    state = {
        opcoes : ["Curso técnico", "Curso de Inglês", "Não fiz curso complementar"]
    }
    render() {
      return (
        <div>
          <h1>ETAPA 3</h1>
          <PerguntaAberta pergunta={"Por que você não terminou um curso de graduação?"} />
          <PerguntaSelecionar pergunta = {"Você fez algum curso complementar?"} opcoes = {this.state.opcoes} />
          <button onClick={this.props.funcaoOnClickProximaEtapa} > Próxima Etapa </button>
        </div>
      );
    }
  }
  
  export default Etapa3;