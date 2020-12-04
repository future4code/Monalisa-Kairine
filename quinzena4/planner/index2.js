//Função para limpar uma tarefa

function limparTarefa() {
    const limparTarefas = document.getElementsByClassName("divTarefas")
    for (let i = 0; i < limparTarefas.length; i++){
        limparTarefas[i].innerHTML = ""
    } 
}

//Função para adicionar uma tarefa
function adicionarTarefa(){
    const tarefa = document.getElementById("tarefa") //id do input
    const diaSemana = document.getElementById("dias-semana")
    if(tarefa.value !== ""){
        switch(diaSemana.value){
            case "domingo" :
                const tarefaDomingo = document.getElementById("domingo")
                tarefaDomingo.innerHTML += `<li>${tarefa.value}</li>`
                tarefa.value = ""
                break;

            case "segunda" :
                const tarefaSegunda = document.getElementById("segunda")
                tarefaSegunda.innerHTML +=`<li>${tarefa.value}</li>`
                tarefa.value = ""
                break;

            case "terca":
                const tarefaTerca = document.getElementById("terca")
                tarefaTerca.innerHTML +=`<li>${tarefa.value}</li>`
                tarefa.value = ""
                break;

            case "quarta":
                const tarefaQuarta = document.getElementById("quarta")
                tarefaQuarta.innerHTML +=`<li>${tarefa.value}</li>`
                tarefa.value = ""
                break;

            case "quinta":
                const tarefaQuinta = document.getElementById("quinta")
                tarefaQuinta.innerHTML +=`<li>${tarefa.value}</li>`
                tarefa.value = ""
                break;

            case "sexta":
                const tarefaSexta = document.getElementById("sexta")
                tarefaSexta.innerHTML +=`<li>${tarefa.value}</li>`
                tarefa.value = ""
                break;

            case "sabado":
                const tarefaSabado = document.getElementById("sabado")
                tarefaSabado.innerHTML +=`<li>${tarefa.value}</li>`
                tarefa.value = ""
                break;
                                
        }
    }else{
        alert("Digite uma tarefa!")
    }

}