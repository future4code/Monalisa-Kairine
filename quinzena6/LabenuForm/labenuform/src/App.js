import React from "react";

import './App.css';
import styled from "styled-components";
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

class App extends React.Component {

  state = {
    etapa: 1
  };

  onClickProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };



  render() {
    const paginaExibida = ()=> {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 funcaoOnClickProximaEtapa={this.onClickProximaEtapa} />;
        case 2:
          return <Etapa2 funcaoOnClickProximaEtapa={this.onClickProximaEtapa} />;
        case 3:
            return <Etapa3 funcaoOnClickProximaEtapa={this.onClickProximaEtapa} />;
        case 4:
            return <Final/>;
        default:
          return <div></div>;
    }
  };

  return(
    <div>
        {paginaExibida()}
      </div>
  )
  

}
}

export default App;
