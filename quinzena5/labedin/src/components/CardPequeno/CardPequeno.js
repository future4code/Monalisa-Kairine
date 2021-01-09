import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem}/>
            <div>
                <h4><strong>{props.nome} </strong> {props.texto}</h4>
            </div>

        </div>
    )

}

export default CardPequeno 