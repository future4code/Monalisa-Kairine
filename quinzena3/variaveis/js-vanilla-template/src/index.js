// Exercícios de interpretação

//Exercicio 1
// a = 10
// b = 10
// console.log(b) - Irá imprimir 10
// b = 5
// console.log(a, b) - Irá imprimir 10 5

// Exercicio 2
// a = 10
// b = 20
// c = a
// b = c
// a = b
// console.log(a, b, c) - Irá imprimir 10 10 10

// Exercicios de escrita de codigo

// 1 ----------------------------------------------------------------------

let nome
let idade
console.log("tipo da variavel nome:", typeof nome , ", tipo da variável idade:" , typeof idade)
// Imprime undefined porque as variáveis nome e idade não foram declaradas antes

nome = prompt("Qual e o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log("tipo da variavel nome:", typeof nome , ", tipo da variável idade:" , typeof idade)
// Tanto nome quando idade retornaram string, isso porque o prompt sempre retorna um string 

console.log("Olá" , nome, ", você tem", idade,"anos")

// 2 --------------------------------------------------------------------

let cidade
let comida
let cor
let cantor
let livro

cidade = prompt("qual sua cidade natal?")
comida = prompt("qual sua comida favorita?")
cor = prompt("qual sua cor favorita?")
cantor = prompt("qual cantor/banda você mais gosta?")
livro = prompt("qual foi o último livro que você leu")


console.log("Qual sua cidade natal", cidade)
console.log("qual sua comida favorita?", comida)
console.log("Qual sua cor favorita?", cor)
console.log("qual cantor/banda você mais gosta?", cantor)
console.log("Qual foi o último livro que você leu", livro)

// 3 --------------------------------------------------------------------

let comidasPreferidas = ["chocolate", "pizza", "lasanha", "pão de queijo", "queijo"]

console.log(comidasPreferidas)

console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])


comidasPreferidas[1] = prompt("Qual sua comida preferida?")

console.log("Essas são minhas comidas preferidas, incluinda a segunda que o usuário forneceu:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

// 4 --------------------------------------------------------------------


let exercicio4 = ["Voce esta de azul hoje?", "Esta chovendo na sua cidade hoje?", "Você trabalhou hoje?" ]

respostas = [true, false, true]

console.log(exercicio4[0], resposta[0])
console.log(exercicio4[1], resposta[1])
console.log(exercicio4[2], resposta[2])





