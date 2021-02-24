import React, {useState} from "react";
import axios from 'axios';
import { baseUrl, axiosConfig } from "../../constants";
import {PlaylistCreationFormContainer, PlaylistCreationForm, Input, Button} from "./styled"


export default function PlaylistCreationPage() {

    const [inputNameValue, setInputNameValue] = useState("")

    const changeInputnameValue = (event) => {
        setInputNameValue(event.target.value)
    }

    const createPlaylist = (event) => {
        
        event.preventDefault();
        const body = {
            name: inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            alert(err)
        ]);
        setInputNameValue("");
    };
    
        return (
            <PlaylistCreationFormContainer>
                <h1>Cadastrar Playlist</h1>
                <PlaylistCreationForm onSubmit={createPlaylist} >
                    <Input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={inputNameValue}
                        onChange={changeInputnameValue}
                    />
                    <Button>Cadastrar Playlist</Button>
                </PlaylistCreationForm>
            </PlaylistCreationFormContainer>
        );
};