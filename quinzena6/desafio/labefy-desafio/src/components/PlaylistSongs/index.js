import React, { useState, useEffect } from "react";
import axios from "axios";
import SongCard from "../SongCard";
import { baseUrl, axiosConfig } from "../../constants";
import { PlaylistDetailContainer, TrackCreationForm, Button } from "./styled"

export default function PlaylistSongs(props) {

    console.log("props playlist songs",props)

    const [tracks, setTracks] = useState([])
    const [trackName, setTrackName] = useState("")
    const [artist, setArtist] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {
        getPlaylistTracks()
    })

    const getPlaylistTracks = () => {
        axios.get(`${baseUrl}/${props.playlistId}/tracks`, axiosConfig).then(response => {
            setTracks(response.data.result.tracks)
        }).catch(err => {
            console.log(err)
        });
    };
    const removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${props.playlistId}/tracks/${trackId}`, axiosConfig).then(() => {
            getPlaylistTracks();
        }).catch(err => {
            console.log(err);
        });
    };

    const changeInputTrackName = (event) => {
        setTrackName(event.target.value)
    };

    const changeInputArtist = (event) => {
        setArtist(event.target.value)
    };

    const changeInputUrl = (event) => {
        setUrl(event.target.value)
    };
    const addTrackToPlaylist = (event) => {
        event.preventDefault()

        const body = {
            name: trackName,
            artist: artist,
            url: url
        };

        axios.post(`${baseUrl}/${props.playlistId}/tracks`, body, axiosConfig)
            .then(() => { getPlaylistTracks() })
            .catch(err => { console.log(err) });

        setTrackName("")
        setArtist("")
        setUrl("")
    };

    const tracksList = tracks.map(track => {
        return <SongCard
            key={track.id}
            trackName={track.name}
            trackArtist={track.artist}
            url={track.url}
            trackId={track.id}
            removeTrackFromPlaylist={removeTrackFromPlaylist}
        />
    })

    return (
        <PlaylistDetailContainer>
            <TrackCreationForm onSubmit={addTrackToPlaylist} >
                <h3>Adicione uma música para essa playlist</h3>
                <div>
                    <label>Nome da música:</label>
                    <input
                        placeholder="Nome da música"
                        name="trackName"
                        value={trackName}
                        onChange={changeInputTrackName}
                    />
                </div>
                <div>
                    <label>Artista:</label>
                    <input
                        placeholder="Nome do Artista"
                        name="artist"
                        value={artist}
                        onChange={changeInputArtist}
                    />
                </div>
                <div>
                    <label>URL da música:</label>
                    <input
                        placeholder="URL da música"
                        name="url"
                        value={url}
                        onChange={changeInputUrl}
                    />
                </div>
                <Button type="submit">Adicionar música</Button>
            </TrackCreationForm>
            {tracksList}
            <Button onClick={() => props.changePage("playlists", "")} >Voltar para playlists</Button>
        </PlaylistDetailContainer>
    )
};

