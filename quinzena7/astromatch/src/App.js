import React, { useEffect, useState } from 'react';
import MainScreen from './Screens/MainScren'
import MatchScreen from './Screens/MatchScren'
import Header from './Components/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
display: grid;
justify-content: center;
align-items: center;
height: 100vh;

`

const PageContainer = styled.div`
display: grid;
grid-template-rows: auto auto;
background-color: white;
width: 440px;
height: 600px;
border-style: solid;
border-radius: 8px;
border-width: 1px;

`

export default function App() {

  const [currentPage, setCurrentPage] = useState(true)

  const setPage = () => { setCurrentPage(!currentPage) }

  return (
    <AppContainer>
      <PageContainer>
        <Header setPage = {setPage}/>
        {currentPage ? <MainScreen /> : <MatchScreen />}
      </PageContainer>
    </AppContainer>


  );
}

