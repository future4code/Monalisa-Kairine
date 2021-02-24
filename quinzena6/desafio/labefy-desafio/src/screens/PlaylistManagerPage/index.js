import React, {useState} from "react";
import Playlists from "../../components/Playlists/index";
import PlaylistSongs from "../../components/PlaylistSongs/index";
import { PlaylistManagerContainer } from "./styled";


export default function PlaylistManagerPage() {

    const [currentPage, setCurrentPage] = useState("playlists")
    const [playlistId, setPlaylistId] = useState("")


    const changePage = (currentPage, playlistId) => {
        setCurrentPage(currentPage)
        setPlaylistId(playlistId)
    }

    const renderCurrentPage = () => {
        if (currentPage === "playlists") {
            return <Playlists
                changePage={changePage}
            />
        } else if (currentPage === "playlistSongs") {
            return <PlaylistSongs
                changePage={changePage}
                playlistId={playlistId}
            />
        }
    }

    return (
        <PlaylistManagerContainer>
            {renderCurrentPage()}
        </PlaylistManagerContainer>
    )
};