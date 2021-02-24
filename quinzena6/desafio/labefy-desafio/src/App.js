import React, {useState} from 'react';
import Header from './components/Header/index';
import PlaylistCreationPage from './screens/PlaylistCreationPage';
import PlaylistManagerPage from './screens/PlaylistManagerPage';
import {AppContainer} from "./styled";

export default function App() {

  const [currentPage, setCurrentPage] = useState("playlistCreationPage");

  const changePage = (currentPage) => {
    setCurrentPage(currentPage)
  }

    return (
      <AppContainer>
        <Header changePage = {changePage}/>
        {currentPage === "playlistCreationPage" ? <PlaylistCreationPage /> : <PlaylistManagerPage />}
      </AppContainer>
    );
}
