import React from "react";
import {TrackCardContainer, TrackContainer, ArtistContainer, DeleteButton} from "./styled"
import Remove from "../../assets/remove.svg"

const TrackCard = (props) => {
    return (
        <TrackCardContainer>
            <div>
                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistContainer>{props.trackArtist}</ArtistContainer>
                <DeleteButton  src={Remove} onClick={() => props.removeTrackFromPlaylist(props.trackId)} /> 
            </div>
            <audio controls="controls"> 
                <source src={props.url} type="audio/ogg" />
            </audio>
        </TrackCardContainer>
    )
}

export default TrackCard