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

// Função somente para imprimir no console as cartas do computador e do usuario
function imprimeCartas(parametro) {
   let texto = ""
  for (i=0; i< parametro.length; i++) {
   texto += parametro[i].texto
  }
  return texto
}

//Função para calcular a pontuação tanto do usuario quanto do computador
function calculaPontuacao(pontuacao){
   let pontos = 0
   for(i=0; i < pontuacao.length; i++){
      pontos += pontuacao[i].valor
   }

   return pontos
}

//Função que testa o resultado dado a pontuação do usuário e do computador
function testaResultado(pontosUsuario, pontosComputador){
   resultado = ""
   if(pontosComputador>pontosUsuario && pontosComputador <= 21){
      resultado = " Computador ganhou"
   }else if(pontosUsuario > pontosComputador && pontosUsuario <=21){
      resultado = " Usuario ganhou"
   }else if(pontosUsuario<pontosComputador && pontosComputador>21){
      resultado = " Usuário Ganhou"
   }else if(pontosComputador<pontosUsuario && pontosUsuario>21){
      resultado = " Computador Ganhou"
   }else{
      resultado = " Empate"
   }
   return resultado
}


console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   console.log("Vamos iniciar")

   let cartasUsuario = []
   let cartasComputador = []

   cartasUsuario.push(comprarCarta())
   cartasUsuario.push(comprarCarta())

   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   
   //Condição impedindo que tanto o usuário quanto o computador tenham duas cartas A's
   if(cartasUsuario[0].valor === cartasUsuario[1].valor === 11 || cartasComputador[0] === cartasComputador[1] === 11){
      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())   
      cartasComputador.push(comprarCarta())
      cartasComputador.push(comprarCarta())
   }


   pontosUsuario = calculaPontuacao(cartasUsuario)

   //Parte do código onde o usuário recebe novas cartas enquanto ele der ok e enquanto sua potuação for menor ou igual que 21
   while(confirm("Suas cartas são" + imprimeCartas(cartasUsuario) + ". A carta revelada do computador é " + cartasComputador[0].texto + ". Deseja comprar mais uma carta?") && pontosUsuario<=21){
      cartasUsuario.push(comprarCarta())
      pontosUsuario = calculaPontuacao(cartasUsuario)      
   }

   pontosUsuario = calculaPontuacao(cartasUsuario)
   pontosComputador = calculaPontuacao(cartasComputador)
   
   //Agora o computador compra cartas até atingir 21 pontos ou uma pontuação maior que o usuário e menor de 21
   if(pontosUsuario<21){
      while(pontosComputador < 21){
         console.log("passou no while 2")
         if(pontosComputador===21){
            break;
         }else if(pontosComputador > pontosUsuario){
            break;
         }
         cartasComputador.push(comprarCarta())
         pontosComputador = calculaPontuacao(cartasComputador)
      }
   }

   // Resultados finais após o fim dos laços anteriores
   alert(" Alert Suas cartas foram: " + imprimeCartas(cartasUsuario) + " e sua pontuacao é " + calculaPontuacao(cartasUsuario) + "\n" 
   + "As cartas do computador são " + imprimeCartas(cartasComputador) + " e a pontuação foi " + calculaPontuacao(cartasComputador) + testaResultado(calculaPontuacao(cartasUsuario), calculaPontuacao(cartasComputador)))

}   
else{
   console.log("O jogo acabou!")
}

