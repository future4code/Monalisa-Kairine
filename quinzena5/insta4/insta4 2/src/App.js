import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'



const Formulario = styled.input`
  display: block;
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  width: 300px;
  margin: auto;
`;

const BotaoEnviar = styled.button`
  display: block;
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  margin: 4px auto;
  padding: 4px;


`;


class App extends React.Component {

  state = {
    
    postagens: [
    {
      nomeUsuario: 'Monalisa',
      fotoUsuario: 'https://picsum.photos/50/5',
      fotoPost: 'https://picsum.photos/180/150'
    },
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/52',
      fotoPost: 'https://picsum.photos/250/160'
    },{
      nomeUsuario: 'Nino',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/170'
    }
  ],
  
  valorInputNomeUsuario: "",
  valorInputFotoUsuario: "",
  valorInputFotoPostagem: "",
}

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

   onChangeInputFotoPostagem = (event) => {
    this.setState({ valorInputFotoPostagem: event.target.value });
  };

  adicionaPostagem = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPostagem,
    };

    const novoPostagens = [...this.state.postagens, novaPostagem];

    this.setState({ postagens: novoPostagens });
  };




  render() {

    const listaDePostagem = this.state.postagens.map((postagem) => {

      return (
        <Post
          nomeUsuario = {postagem.nomeUsuario}
          fotoUsuario = {postagem.fotoUsuario}
          fotoPost = {postagem.fotoPost}
        />
      );
    });


    return (
      <div>

        <Formulario value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputNomeUsuario} placeholder={"Nome do Usuário"}></Formulario>
        <Formulario value={this.state.valorInputFotoUsuario} onChange={this.onChangeInputFotoUsuario} placeholder={"Link da Foto do Usuário"}></Formulario>
        <Formulario value={this.state.valorInputFotoPostagem} onChange={this.onChangeInputFotoPostagem} placeholder={"Link da Foto para Postagem"}></Formulario>
        <BotaoEnviar onClick={this.adicionaPostagem}>Enviar</BotaoEnviar>

        <div className={'app-container'}>
          {listaDePostagem}
        </div>
      </div>
    );
  }
}

export default App;
