import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcacaoPreto from '../../img/marking.svg'
import iconeMarcacaoBranco from '../../img/marking-white.svg'
import iconeShare from '../../img/share.svg'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,
    compartilhando: false,
  }

  onClickCurtida = () => {
    console.log(this.state.curtido)
    this.setState({
      curtido: !this.state.curtido,
    })

    if (!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      });
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      });
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickMarcacao = () => {
    this.setState({
      marcacao: !this.state.marcacao
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    let iconeMarcacao

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
     } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.marcacao) {
      iconeMarcacao = iconeMarcacaoPreto
     } else {
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />

      </div>
      {componenteComentario}
    </div>
  }
}

export default Post