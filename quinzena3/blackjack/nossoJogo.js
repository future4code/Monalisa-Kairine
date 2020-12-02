/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")){
   console.log("Vamos iniciar")

   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   resultadoUsuario = carta1Usuario.valor + carta2Usuario.valor

   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   resultadoComputador = carta1Computador.valor + carta2Computador.valor

   console.log("Usuário - cartas: ", carta1Usuario.texto, carta2Usuario.texto, "total", resultadoUsuario)
   console.log("Computador - cartas: ", carta1Computador.texto, carta2Computador.texto, "total", resultadoComputador)

   if (resultadoUsuario === resultadoComputador){
      console.log("Empate")
   }  else if (resultadoUsuario<resultadoComputador){
      console.log("O computador ganhou!")
   }  else {
      console.log("O usuário ganhou!")
   }
   
}  else{
   console.log("O jogo acabou!")
}