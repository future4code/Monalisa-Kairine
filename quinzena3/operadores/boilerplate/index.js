console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// ------------------ EXERCÍCIO 1 ------------------
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // Imprime a. False

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado) -> Imprime b. False

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado) // c. Imprime True

// console.log("e. ", typeof resultado) -> e. Boolean



// ------------------ EXERCÍCIO 2 ------------------
// let array
// console.log('a. ', array) // Imprime a. Undefined

// array = null
// console.log('b. ', array) // Imprime b. Null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // Imprime c. 11

// let i = 0
// console.log('d. ', array[i]) //Imprime d. 3

// array[i+1] = 19
// console.log('e. ', array) // Imprime e. [3, 19, 5,6,7,8,9,10,11,12,13]

// const valor = array[i+6]
// console.log('f. ', valor) // Imprime f. 9



// ------------------ EXERCÍCIO DE CÓDIGO 1 ------------------

let idadeUsuario = Number(prompt("Qual sua idade?"))

let idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)

console.log("A diferença de idade é", idadeUsuario-idadeAmigo)



// ------------------ EXERCÍCIO DE CÓDIGO 2 ------------------

numeroPar = Number(prompt("Insira um número par"))
console.log("O resto da divisão desse número por 2 é: ", numeroPar%2)

// o resto da divisao de um número par por 2 é sempre 0
// O resto da divião de um número impar por 2 é sempre 1



// ------------------ EXERCÍCIO DE CÓDIGO 3------------------

let listaDeTarefas = []

listaDeTarefas[0] = prompt("Diga uma tarefa que você precisa realizar durante o dia")
listaDeTarefas[1] = prompt("Diga uma segunda tarefa que você precisa realizar durante o dia")
listaDeTarefas[2] = prompt("Diga uma terceira tarefa que você precisa realizar durante o dia")

console.log("A lista de tarefas e", listaDeTarefas)

indice = Number(prompt("Qual tarefa você já realizou 1,2 ou 3?"))

itemRemovido = listaDeTarefas.splice(indice-1,1)


console.log("Você realizou a seguinte tarefa:", itemRemovido)
console.log("Falta realizar as seguintes tarefas:", listaDeTarefas)


// ------------------ EXERCÍCIO DE CÓDIGO 4------------------

nomeDoUsuario = prompt("Qual seu nome?")
emailDoUsuario = prompt("Qual seu emal?")

console.log("O e-mail", emailDoUsuario, " foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario, "!")



// ------------------ DESAFIO 1 ------------------

// let temperaturaCelsius
// let temperaturaFahrenheit
// let temperaturaKelvin 


// temperaturaFahrenheit = 77
// console.log("77°F equivale a ", (temperaturaFahrenheit -32)*(5/9) + 273.15 , "K")

// temperaturaCelsius = 80
// console.log("80°C equivale a ", (9/5)*(temperaturaCelsius +32), "°F" )

// temperaturaCelsius = 30
// console.log("30°C equivale a ", (9/5)*(temperaturaCelsius +32), "°F" , "e a" , temperaturaCelsius + 273.15, "K" )

// temperaturaCelsius = Number(prompt("Qual temperatura em °C você deseja converter ?"))
// console.log(temperaturaCelsius, "equivale a", (9/5)*(temperaturaCelsius +32), "°F" , "e a" , temperaturaCelsius + 273.15, "K" )

// ------------------ DESAFIO 2 ------------------

// let quilowattHora
// let precoPorQuilowatt
// let total

// total = quilowattHora*precoPorQuilowatt
// quilowattHora = 280
// console.log("Uma residência que consum2 280 quilowatt-hora irá pagar", total, "R$")

// desconto = Number(prompt("Qual o desconto em porcentagem?"))

// totalComDesconto = (desconto/100)*(total)

// console.log("Considerando o desconto, você irá pagar:", totalComDesconto)

//----------------DESAFIO 3 a ---------------------------

// let lb
// let kg

// lb=20
// kg = 2.20462*lb
// console.log("20 lb equivale a", kg, "kg" )

// //----------------DESAFIO 3 b ---------------------------

// let oz
// let kg

// oz = 10.5
// kg = 35.274*oz
// console.log("10.5 oz equivale a", kg, "kg")

// //----------------DESAFIO 3 c ---------------------------

// let medidaMilha
// let medidaMetro

// medidaMilha = 100
// medidaMetro = 1609.34*medidaMilha

// console.log("100 mi equivalem a", medidaMetro ," m")

//----------------DESAFIO 3 d ---------------------------

// let medidaPes
// let medidaMetro

// medidaPes = 50
// medidaMetro = medidaPes*0.3048

// console.log("50 ft equivalem a", medidaMetro ,"m")

//----------------DESAFIO 3 e ---------------------------

// let litro
// let galao

// galao = 103.56
// litro = galao/0.264172

// console.log("103.56gal equivalem a", litro ,"l")

