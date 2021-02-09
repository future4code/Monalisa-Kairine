import React from "react";
import {BASE_URL, axiosConfig} from "../../constants/requisicoes"
import axios from "axios"
import {List} from "./styled";



const usuariosMockados = [
    {
        id: "1",
        name: "Bob"
    },

    {
        id: "2",
        name: "mona"
    }
]

export default class ListaUsuario extends React.Component{
    
    state = {
        usuarios: [],
    }

    componentDidMount(){
        this.pegarUsuario();
    }




    deletarUsuario = (id)=>{
        console.log(id)
        axios.delete(`${BASE_URL}/users/${id}`, axiosConfig)
        .then((resposta)=>{
            alert("usuario deletado")
            this.pegarUsuario()            
        })
        .catch((erro)=>{
            alert(erro.message)
        })

    }

    pegarUsuario = () =>{
        axios.get(`${BASE_URL}/users`, axiosConfig)
        .then((resposta)=>{
            this.setState({
                usuarios: resposta.data
            })

        })
        .catch((erro)=>{
            alert(erro.message)
        })
    }


    render(){

        const listaUsuarios = this.state.usuarios.map((item)=>{
            return(
                <div>
                    {item.name}
                    <button onClick = {()=>{this.deletarUsuario(item.id)}}>X</button>
                </div>
            )
        })
        return(

            <List>
                {listaUsuarios}
            </List>

        )
    }


}
