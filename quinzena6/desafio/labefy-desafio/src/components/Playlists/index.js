import React, { useState, useEffect } from "react";
import axios from "axios"
import PlaylistCard from "../../components/PlaylistCard/index";
import { baseUrl, axiosConfig } from "../../constants";
import { PlaylistsContainer } from "./styled";

export default function Playlists(props) {

    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        fetchPlaylists()
    })

    const fetchPlaylists = () => {
        axios.get(baseUrl, axiosConfig).then(response => {
            setPlaylists(response.data.result.list)
        }).catch(err => {
            console.log(err)
        })
    };

    const deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
            fetchPlaylists()
        }).catch(err => {
            console.log(err)
        });
    };

    const playlistsList = playlists.map(playlist => {
        return <PlaylistCard
            key={playlist.id}
            changePage={props.changePage}
            name={playlist.name}
            playlistId={playlist.id}
            deletePlaylist={deletePlaylist}
        />
    })

    return (
        <PlaylistsContainer>
            <h1>Playlists Cadastradas</h1>
            {playlistsList}
        </PlaylistsContainer>
    )
};