import React from "react";

function PerguntaSelecionar(props) {
    console.log("pergunta selecionar", props.opcoes)

    const valoresOpcoes = props.opcoes.map((item) => {
        return <option value = {item}>{item}</option>;
    })

    return (
        <div>
            <p>{props.pergunta}</p>
            <select>
                {valoresOpcoes}
            </select>
        </div>
    );
}

export default PerguntaSelecionar
