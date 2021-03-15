import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { DivTextHome, TitleHome, TextHome, DivHome, DivImage } from "./styled";


const HomePage = () => {


  return (
    <div>
    <NavBar />
    <DivHome>
      <DivTextHome>
        <TitleHome>LabeX: Tornamos viagens incríveis em realidade</TitleHome>
        <TextHome>
        Somos uma plataforma de gerenciamento de viagens espaciais. Venha conhecer nossas viagens
        e tudo que temos a oferecer em nossos pacotes turísticos. Prepare-se para embarcar
        conosco nesta viagem espacial onde nem o céu é o limite.
        </TextHome>
      </DivTextHome>
    </DivHome>
    </div>
  );
};

export default HomePage;