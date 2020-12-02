console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// ---------------------------------------- EXERCÍCIO 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O programa soma números de 1 a 5. O resultado impresso é 10


// ---------------------------------------- EXERCÍCIO 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) O programa imprime os números maiores que 18 da lista
//b) Seria possível, basta criar uma variavel indice que comece com 0 e aumente 1 unidade para cada numero da lista

// ---------------------------------------- EXERCÍCIO 3

// let arrayOriginal = [1,2,3,4,5,6,7,8,9,10]
// a)
// for (let numero of arrayOriginal){
//     console.log(numero)
// }

//b)
// for (let numero of arrayOriginal){
//     console.log(numero/10)
// }

//c)
// let novoArray = [] 
// for(let numero of arrayOriginal){
//     if(numero%2===0){
//         novoArray.push(numero)
//     }
// }
// console.log(novoArray)

//d)
// let indice = 0
// let novoArray2 = []
// for (let numero of arrayOriginal){
//     novoArray2.push("O elemento do índex " + indice + " é " + numero)
//     indice++

// }

// for (frase of novoArray2){
//     console.log(frase)
// }


//e)
// let valorMaximo = 0
// let valorMinimo = 10000

// for( numero of arrayOriginal){
//     if (numero>valorMaximo){
//         valorMaximo=numero
//     }

//     if(numero < valorMinimo){
//         valorMinimo = numero
//     }
// }

// console.log("o maior número é "+ valorMaximo+ " e "+ "o menor é" + valorMinimo)


// ---------------------------- Desafio 2

// let numeroEscolhido = Number(prompt("Insira um número maior que 0"))

// console.log("Vamos jogar!")
// chute = -1
// tentativas = 0
// while(numeroEscolhido !== chute){
//     chute  = Number(prompt("Insira um numero até acertar"))
//     console.log("O número chutado foi: " + chute)
//     if(chute>numeroEscolhido){
//         console.log("Errou! O número escolhido é menor ")
//     } else if(chute<numeroEscolhido){
//         console.log("Errou! O número escolhido é maior")
//     } else{
//         console.log("Você acertou!")
//     }
//     tentativas++
// }

// console.log("O número de tentativas foi " + tentativas)

// ---------------------------- Desafio 3

numeroComputador = Math.round( Math.random()*100 )
// O Math.random() sorteia um número entre 0 e 1, com 1 não incluido. Então, simplesmente multipliquei por 100 para obter um numero entre 0 e 100
// Para arredondar esse numero para um inteiro usei o método Math.round que arredonda o número para o inteiro maior mais próximo.

console.log("Vamos jogar!")
chute = -1
tentativas = 0
while(numeroComputador !== chute){
    chute  = Number(prompt("Insira um numero até acertar"))
    console.log("O número chutado foi: " + chute)
    if(chute>numeroComputador){
        console.log("Errou! O número escolhido é menor ")
    } else if(chute<numeroComputador){
        console.log("Errou! O número escolhido é maior")
    } else{
        console.log("Você acertou!")
    }
    tentativas++
}

console.log("O número de tentativas foi " + tentativas)
// Realizar a alteração foi fácil uma vez que nos foi dado a dica para o método para obter números aleatórios.