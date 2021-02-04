import React from "react";
import CriarUsuario from "./screens/CriarUsuario/CriarUsuario"
import ListaUsuarios from "./screens/ListaUsuario/ListaUsuarios"
import styled from "styled-components"


const InitialPage = styled.div`
	color: #3d405b;
  display: grid;
	width: 300px;
	margin: 50px auto;

  & >p {
    font-size: 48px;
    text-align: center;
  }

  & > button{
    display: grid;
    align-items: center;
    background-color: #e5989b;
    border: none;
  }
`;

export default class App extends React.Component {

  state = {
    criarUsuario: true
  }

  mudarTela = () => {
    this.setState({ criarUsuario: !this.state.criarUsuario })
  }



  render() {
    return (
      <InitialPage>
        <p>Labenusers</p>
        <button onClick={this.mudarTela}>{this.state.criarUsuario ? "Ir para lista de usuários" : "Ir para página de cadastro"}</button>
        {this.state.criarUsuario ? <CriarUsuario /> : <ListaUsuarios />}
      </InitialPage>
    )
  }

}

