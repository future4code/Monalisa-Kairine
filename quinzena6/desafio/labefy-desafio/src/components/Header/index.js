import React from "react";
import {HeaderContainer, ButtonsContainer, Img, LogoContainer, Button} from "./styled"
import Logo from "../../assets/play.svg"
const Header = (props) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Img src = {Logo} />
                <h1>Labefy</h1>
            </LogoContainer>
            <ButtonsContainer>
                <Button onClick={() => props.changePage("playlistCreationPage")} >Cadastrar Playlist</Button>
                <Button onClick={() => props.changePage("playlistManagerPage")} >Gerenciar Playlists</Button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header