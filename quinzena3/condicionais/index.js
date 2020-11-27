console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// ------------------------------------  EXERCÍCIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Esse código testa se um número é par ou não. A mensagem não passou no teste aparece para números ímpares.

// ------------------------------------  EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) o código indica o preço de acordo com a fruta selecionada
// b) no caso da maçã, indicaria: O preço da fruta maçã é R$ 2.25
// c) se retirássemos o break que está logo acima do default iria imprimir R$ 5

// ------------------------------------  EXERCÍCIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) a primeira linha testa se o numero é maior que zero
//b) Se o usuário digitar 10 irá imprimir: esse número passou no teste. Se o usuário digitar -10 não irá acontecer nada.
//c) Haverá um erro de mensagem não esta definida. Isto ocorre porque a variável mensagem pertence somente ao escopo do if e não ao escopo global.

// ------------------------------------  EXERCÍCIO 4

// let idade = Number(prompt("Qual a sua idade?"))

// if (idade>=18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir")
// }

// ------------------------------------  EXERCÍCIO 5

// let turno = prompt("Qual turno voê estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno==="M"){
//     console.log("Bom dia!")
// } else if (turno === "V"){
//     console.log("Boa Tarde!")
// }else{
//     console.log("Boa noite!")
// }

// ------------------------------------  EXERCÍCIO 6

// let turno = prompt("Qual turno voê estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

// switch(turno){
//     case "M": 
//         console.log("Bom dia!")
//     break;
//     case "V":
//         console.log("Boa Tarde!")
//     break;
//     case "N":
//         console.log("Boa noite!")
//     break;
//     default:
//         console.log("Digite M,V ou N")
// }

// ------------------------------------  EXERCÍCIO 7

// let genero = prompt("Qual o gênero do filme que irão assistir?").toLowerCase()
// let preco = Number(prompt("Qual o preço do ingresso do filme?"))

// if( genero=== "fantasia" && preco<15){
//     console.log("Bom filme!")
// } else{
//     console.log("Escolha outro filme")
// }

// -----------------------------------  Desafio 1

// let genero = prompt("Qual o gênero do filme que irão assistir?").toLowerCase()
// let preco = Number(prompt("Qual o preço do ingresso do filme?"))

// if( genero=== "fantasia" && preco<15){
//     snack = prompt("Qual snack você deseja comprar? ")
//     console.log("Bom filme! " + "...com " + snack)
// } else{
//     console.log("Escolha outro filme")
// }

//-------------------------------- Desafio 2

nomeCompleto = prompt("Insira seu nome completo")
tipoJogo = prompt("Qual o tipo de jogo? Insira IN para internacional e DO para doméstico").toUpperCase()
etapaJogo = prompt("Qual a etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()
categoria = Number(prompt("Qual a categoria? Insira 1,2,3 ou 4"))
quantidade = Number(prompt("Quantos ingressos deseja comprar?"))

let preco
let valorIngresso

if(tipoJogo === "DO"){
    fator = 1
}else{
    fator = 4.10
}

switch(etapaJogo){
    case "FI":
        switch (categoria) {
            case 1: valorIngresso = 1980; break;
            case 2: valorIngresso = 1320; break;
            case 3: valorIngresso = 880 ; break;
            case 4: valorIngresso = 330 ; break;
        }
        break;

    case "SF":
        switch (categoria) {
            case 1: valorIngresso = 1320; break;
            case 2: valorIngresso = 880 ; break;
            case 3: valorIngresso = 550 ; break;
            case 4: valorIngresso = 220 ; break;
        }
        break;

    case "DT":
        switch (categoria) {
            case 1: valorIngresso = 660; break;
            case 2: valorIngresso = 440; break;
            case 3: valorIngresso = 330; break;
            case 4: valorIngresso = 170; break;
        }
}

preco = fator*quantidade*valorIngresso

console.log("Nome do cliente: " + nomeCompleto)
console.log("Tipo do jogo " + tipoJogo)
console.log("Etapa do jogo " + etapaJogo)
console.log("Categoria do jogo " + categoria)
console.log("quantidade de ingressos: " + quantidade)
console.log("Valor do ingresso R$ " + valorIngresso)
console.log("Valor total R$ " + preco)

