console.log("oi")

//// ########################################## EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ##########################################


////...................................................... 1 ..................................................................

//// Essa função conversorDeMoedas recebe um input valorEmDolar, pede ao usuário a cotação e retorna um valor em reais (dado
//// pelo valor do dólar vezes a cotação). Então conversorDeMoeda(100) irá retornar R$ 500 caso o input do usuário (cotação) seja 5 reais 

//// ..................................................... 2 ...................................................................

//// Essa função recebe um tipo de investimento e um valor a ser investido e, em posse destas duas variáveis
//// ela verifica o tipo de investimento através do switch e em cada case o valor após o investimento recebe o valor original 
//// multiplicado por algum fator. Além disso, caso o usuário informe um tipo de investimento não listado, aparece um alert. O 
//// output desta funçao é a variável valorAposInvestimento. 
//// No novoMontante irá imprimir 165
//// No segundoMontante irá imprimir TIPO DE INVESTIMENTO INFORMADO INCORRETO.


////...................................................... 3 ..................................................................

//// O for pega cada numero do array numeros e caso esse número seja par ele adiciona esse numero no array1
//// caso contrario o numero será adicionado no array2.
//// Os outputs serão
//// - Quantidade total de números 14
//// - array1.length : 6
//// - array2.length: 8

//// ..................................................... 4 ...................................................................

//// Esse for testa cada numero do array números e retorna o menor número na variável numero1 e o maior numero na variável numero2
//// Os outputs serão: -10 e 1590


//// ##########################################  EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ######################################### 


//// ..................................................... 1 ...................................................................

////Três maneiras diferentes para iterar uma lista seriam: For, For of, while:

// lista = [1,2,3,4]

// for(let item of lista){ 
//     console.log(item)
//  }

// for( let cont = 0; cont< lista.length ; cont++){
//     console.log(cont)
// }

// let i = 0
// while(i<lista.length){ 
//     console.log(i)  
//     i++  
// }


//// ..................................................... 2 ...................................................................

//// a - false
//// b - false
//// c - true
//// d - true
//// e - true

//// ..................................................... 3 ...................................................................

//// Esse código não irá funcionar, ele não inicializou a variável quantidadeDeNumerosPares,
//// não realizou um incremento na variável i no lugar de <= deveria usar somente < se não sempre 
//// irá imprimir um número a mais do pedido uma vez que o contador começa em 0.
//// Corrigindo a implementação: 

// const quantidadeDeNumerosPares= 5
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

//// ..................................................... 4 ...................................................................



function classificaTriangulo(a,b,c){
	return (a ===b && b===c) ? "Equilátero" : ((a !== b && b !== c) ? "Escaleno" : "Isósceles")
}

console.log("Exercício sobre lógica de programação 4 -", classificaTriangulo(3,10,10))



//// ..................................................... 5 ...................................................................

function comparaNumeros(num1,num2){

    num1>num2 ? console.log(`O maior é ${num1}`) : console.log(`O maior é ${num2}`)

    num1%num2===0 ? console.log(`${num1} é divisível por ${num2}`) : console.log(`${num1} não é divisível por ${num2}`)

    num2%num1===0 ? console.log(`${num2} é divisível por ${num1}`) : console.log(`${num2} não é divisível por ${num1}`)

    console.log("A diferença entre eles é ", Math.abs(num1-num2))
}
console.log("Exercício sobre lógica de programação 5 -")
comparaNumeros(15,30)

//// ##########################################  EXERCÍCIOS DE FUNÇÕES ######################################### 

//// ..................................................... 1 ...................................................................

const arrayNumeros = [10,10,0,3,42,5,6,7,8,9,120]

let max1 = -Infinity 
let max2 = -Infinity 
let min1 = +Infinity
let min2 = +Infinity

function imprimeMaxMin(array){
    for(let numero of array){
        (numero>max1) ? (max2=max1, max1=numero) : (numero >max2) ? max2 = numero : "";
        (numero<min1) ? (min2=min1, min1=numero) : (numero <min2) ? min2 = numero : "";
    }
    
    console.log("primeiro valor máximo:", max1, "Segundo valor máximo:", max2, "primeiro valor mínimo:", min1, "segundo valor mínimo:", min2)

}
console.log("\nExercícios de Funções - 1")
imprimeMaxMin(arrayNumeros)


//// ..................................................... 2 ...................................................................

// const hello = () =>{
//     alert("Hello World")
// }

// hello()


//// ##########################################  EXERCÍCIOS DE OBJETOS ######################################### 


//// ..................................................... 1 ...................................................................

//// Objeto é uma coleção de propriedades utilizadas para representar algo do mundo real dentro do nosso programa. Eles ajudam a organizar o código
//// para reutilizar informações. Objetos são formados por uma chave e um valor e podem possuir propriedades ou métodos. As propriedades são os valores
//// booleanos, strings, números,, arrays... e os métodos são funções.

//// ..................................................... 2 ...................................................................

function criaRetangulo(lado1, lado2){

    let retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2*(lado1+lado2),
        area: lado1*lado2
    }

    return retangulo
}

console.log("\nExercícios de Objetos - 2",criaRetangulo(2,1))

//// ..................................................... 3 ...................................................................

let filmeFavorito = {
    titulo: "Questão de Tempo" ,
    ano: 2013 ,
    diretor: "Richard Curtis",
    atores: ["Rachel McAdams", "Bill Nighy", "Lydia Wilson", "Tom Hollander"]
}

console.log("Exercícios de Objetos - 3",`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} 
e estrelado por ${filmeFavorito.atores}`)


//// ..................................................... 4 ...................................................................

const pessoa = {
    nome: "Monalisa" ,
    idade: 27,
    endereco: "Belo Horizonte",
    email: "mona@gmail",
}

function anonimizarPessoa(pessoa){
    const pessoaAnonima = {
        ...pessoa,
        idade: "ANÔNIMO",
        endereco: "ANÔNIMO",
        email: "ANÔNIMO",
    }
    return pessoaAnonima
}

console.log("Exercícios de Objetos - 4", anonimizarPessoa(pessoa))



//// ##########################################  EXERCÍCIOS SOBRE FUNÇÃO DE ARRAY ######################################### 

//// ..................................................... 1 ...................................................................

const Pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const adultos = Pessoas.filter((pessoa)=>{ return pessoa.idade >= 20 })
const jovens = Pessoas.filter((pessoa)=>{ return pessoa.idade < 20 })

console.log("\nExercícios sobre função de array - 1 a", adultos)
console.log("Exercícios sobre função de array - 1 b", jovens)


//// ..................................................... 2 ...................................................................

const array = [1, 2, 3, 4, 5, 6]

const multiplicaPorDois = array.map((numero)=>{ return numero*2 })
const multiplicaPorTres = array.map((numero)=>{ return numero*3 })
const parOuimpar = array.map((numero)=>{
    if(numero%2===0) return `${numero} é par`
    else return `${numero} é ímpar`
})

console.log("\nExercícios sobre função de array - 2 a", multiplicaPorDois)
console.log("Exercícios sobre função de array - 2 b", multiplicaPorTres)
console.log("Exercícios sobre função de array - 2 c", parOuimpar)


//// ..................................................... 3 ...................................................................

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const temPermissao = pessoas.filter((pessoa)=>{ return (pessoa.idade>14 && pessoa.idade<60 && pessoa.altura>1.5)})
const naoTemPermissao = pessoas.filter((pessoa)=>{ return !(pessoa.idade>14 && pessoa.idade<60 && pessoa.altura>1.5)})

console.log("\nExercícios sobre função de array - 3 a", temPermissao)
console.log("Exercícios sobre função de array - 3 b", naoTemPermissao)

//// ..................................................... 4 ...................................................................

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const email = consultas.map((cliente)=>{

    let pronome
    let verbo

    cliente.genero==="masculino" ? (pronome = "Sr", verbo = "lembrá-lo" ) : (pronome = "Sra", verbo = "lembrá-la" );

    let emailConsultaConfirmada = `Olá, ${ pronome } ${ cliente.nome}. Estamos enviando esta mensagem para
    ${ verbo} da sua consulta no dia ${cliente.dataDaConsulta }. Por favor, acuse
    o recebimento deste e-mail`

    let emailConsultaCancelada = `Olá,${ pronome } ${ cliente.nome}. Infelizmente, sua consulta marcada
    para o dia ${cliente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
    contato conosco para remarcá-la`

    let email = cliente.cancelada ? emailConsultaCancelada : emailConsultaConfirmada

    return email
    
})

console.log("Exercícios sobre função de array - 4", email)

//// ..................................................... 5 ...................................................................


const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente)=>{
    cliente.saldoTotal = cliente.saldoTotal - cliente.compras.reduce((total, amount) => total + amount, 0)
})

console.log("\n Exercícios sobre função de array - 5", contas)




