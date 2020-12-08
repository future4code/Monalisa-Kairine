console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCÍCIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) 
// console.log(minhaFuncao(10)) 

//a) será impresso 10 e 50
//b) só chamando a função nada será impresso

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCÍCIO 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 


// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

//a) irá imprimir Darvas e Goli, que são os índices 0 e 1 do array por conta do console.log dentro da função. 
//Porém nada imprime ao apenas chamarmos a função 
//b) Será impresso Amanda e Caio

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCÍCIO 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

//a) Está função recebe um array, seleciona somente os números pares deste array e retorna um arrayFinal contendo o quadrado dos números pares.
// ums sugestão de nome seria por exemplo calculaQuadradoNumerosPares 



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCÍCIO 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 



function informacoesPessoais() {
    return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao)      
}

const nome = "Monalisa"
const idade = 27
const cidade = "Belo Horizonte"
const profissao = "estudade"

informacoesPessoais()

function informacoesPessoais(nome, idade, cidade, estudante ) {
    if(estudante===true){
        return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou estudante")      
    }else{
        return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e não sou estudante")
    }
}

informacoesPessoais("Monalisa", 27, "Belo Horizonte", false)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCÍCIO 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

// a)
function soma(num1, num2){
    return num1 + num2
}

console.log(soma(2,2))

// b)
function comparaDoisNumeros(num1, num2){
    if(num1>=num2){
        return true
    }else{
        return false
    }
}

console.log(comparaDoisNumeros(1,2))

// c)
function imprimeDezVezes(mensagem) {
    for(let i=0; i < 10; i++){
        console.log(mensagem)
    }
}

imprimeDezVezes("Monalisa")

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCÍCIO 6 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

// a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function tamanhoArray(array){
    return array.length
}

console.log(tamanhoArray(array))


// b)
function numeroEPar(numero){
    if(numero%2==0){
        return true
    }else{
        return false
    }
}
console.log(numeroEPar(5))

//c)
function quantidadeNumerosPares(array){
    quantidade = 0
    for(let numero of array){
        if(numero%2==0){
            quantidade++
        } 
    }
    return quantidade
}

const Numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


console.log("O array possui " + quantidadeNumerosPares(Numeros) + " números pares")

//d)
function quantidadeNumerosPares(array){
    quantidade = 0
    for(let numero of array){
        if(numero%2 != true){
            quantidade++
        } 
    }
    return quantidade
}

const Numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


console.log("O array possui " + quantidadeNumerosPares(Numeros) + " números pares")

