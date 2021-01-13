import React from "react";
import PerguntaAberta from './PerguntaAberta'
import PerguntaSelecionar from './PerguntaSelecionar'


class Etapa1 extends React.Component {

    state = {
        opcoes : ["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"]
    }


    render() {
      return (
        <div>
          <h3>ETAPA 1 - DADOS GERAIS</h3>
          <PerguntaAberta pergunta={"1 - Qual o seu nome?"} />
          <PerguntaAberta pergunta={"2 - Qual sua idade?"} />
          <PerguntaAberta pergunta={"3 - Qual seu email?"} />
          <PerguntaSelecionar pergunta={"4. Qual a sua escolaridade?"} opcoes = {this.state.opcoes}/>
          <br></br>
          <button onClick={this.props.funcaoOnClickProximaEtapa}>Próxima Etapa</button>
        </div>
      );
    }
  }

  export default Etapa1