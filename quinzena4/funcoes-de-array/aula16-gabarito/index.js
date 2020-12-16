let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach(despesa => {
        divDespesas.innerHTML +=`<p><u>Valor: R$ ${despesa.valor} | Tipo: ${despesa.tipo}   | Descrição: ${despesa.descricao}</u></p>`
    });
        
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO

    arrDespesas.forEach((despesa)=>{
        if (despesa.tipo==="alimentação"){
            gastoAlimentacao+=despesa.valor
        }else if(despesa.tipo==="utilidades"){
            gastoUtilidades+=despesa.valor
        }else{
            gastoViagem+=despesa.valor
        }
        gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')
    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }
        
        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}

// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    if(validarFiltro(tipoFiltro,valorMin,valorMax)){
        let despesasFiltradas = arrDespesas.filter((despesa)=>{
            if(tipoFiltro==="todos"){
                return despesa.valor>valorMin && despesa.valor<valorMax
            }
            return tipoFiltro===despesa.tipo && despesa.valor>valorMin && despesa.valor<valorMax
        })
        
        imprimirDespesas(despesasFiltradas)

    } else{
        alert("Todos os campos devem ser preenchidos de modo que os valores sejam positivos o o valor máximo seja maior que o valor mínimo")
    }

}


// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}

//// ############################################   DESAFIO 1

function validarFiltro(tipoFiltro, valorMin, valorMax){

    validacaoCamposPreenchidos = tipoFiltro && valorMin &&valorMax !== ""
    validacaoNumerosPositivos = valorMin>0 && valorMax>0
    validacaoValorMaxMaiorValorMin = valorMax>valorMin

    if(validacaoCamposPreenchidos&&validacaoNumerosPositivos&&validacaoValorMaxMaiorValorMin){
        return true
    }
    return false
}

//// ############################################   DESAFIO 2
function ordenarDespesas(){
    let ordenarDespesas = document.getElementById('despesas')

    despesasOrdenadas = arrDespesas.sort((despesa1,despesa2)=>{
        return despesa2.valor - despesa1.valor
    })

    console.log("despesasordenadas", despesasOrdenadas)

    imprimirDespesas(despesasOrdenadas)

}