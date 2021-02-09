import React from "react";
import styled from "styled-components";
import {BASE_URL, axiosConfig} from "../../constants/requisicoes"
import axios from "axios"
import { Form, Input, Button} from "./styled";




export default class CriarUsuario extends React.Component{

    state = {
        inputNome: "",
        inputEmail: "",
    }

    criarUsuario = ()=>{
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail,
        }

        axios.post(`${BASE_URL}/users`, body, axiosConfig)
        .then(()=>{
            alert(`o usuario ${this.state.inputNome} foi criado`)
            this.setState({
                inputNome: "",
                inputEmail: "",
            })
        })
        .catch((erro)=>{
            alert(erro.message)
        })

        
    }

    mudarNome = (event)=> {
        this.setState({inputNome: event.target.value})
    }

    mudarEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }



    render(){
        return(
            <Form>
                <p> Nome: </p>
                <Input value = {this.setState.inputNome} onChange = {this.mudarNome}/>
                <p>Email:</p>
                <Input value = {this.setState.inputEmail} onChange = {this.mudarEmail}/>
                <div>
                <button onClick = {this.criarUsuario}>Criar Usuario</button>
                </div>             


            </Form>
        )
    }

}

