import React from "react";
import {PlaylistCardContainer, NameContainer, DeleteButton, Button } from "./styled";
import Remove from "../../assets/remove.svg"

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <Button onClick={() => props.changePage("playlistSongs", props.playlistId)}>Abrir playlist</Button>
            <NameContainer>{props.name}</NameContainer>
            <DeleteButton src={Remove} onClick={() => props.deletePlaylist(props.playlistId)}/>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard