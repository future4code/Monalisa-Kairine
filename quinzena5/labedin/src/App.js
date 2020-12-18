import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import labNS from './images/labNS.png';
import perfil from './images/perfil.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil} 
          nome="Monalisa" 
          descricao="Olá, meu nome é Monalisa, atualmente sou estudante de doutorado em Física pela UFMG e de Frontend pela Labenu! Adoro ciência em geral, ler e aprender coisas novas "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/1060/1060370.svg"
          nome="E-mail:"
          texto="mona@gmail"
        />

        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/967/967811.svg"
          nome="Endereço:"
          texto="Belo Horizonte"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aprendendo programação na Labenu" 
        />
        
        <CardGrande 
          imagem={labNS}
          nome="LabNS - Laboratório de Nano-Espectroscopia" 
          descricao="Estudante de doutorado" 
        />

        <CardGrande 
          imagem={labNS}
          nome="LabNS - Laboratório de Nano-Espectroscopia" 
          descricao="Estudante de mestrado" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
