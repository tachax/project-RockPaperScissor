let nickname1 = '';
let nickname2 = '';
let escolhaJogador1 = '';
let escolhaJogador2 = '';
let escolhaNaTela1 = "";
let escolhaNaTela2 = "";
let comparacao = "";
let diagnostico = '';
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let rodada = 0;
let mensagemParabens = "";

function iniciarJogo() {
  //atribui o nickname digitado pelo usuário para a variável
  nickname1 = document.getElementById('jogador1');
  nickname1 = nickname1.value;
  nickname2 = document.getElementById('jogador2');
  nickname2 = nickname2.value;

  //verifica se os jogadores digitaram os nicknames
  if (nickname1 == '' || nickname2 == "") {
    alert("Os dois jogadores devem escolher um nickname")
    return
  }

  //detalhes da estilização (css)
  document.getElementById("game").style.display = "flex";
  document.getElementById("parabens").style.display = "none";
  document.getElementById('inicio').disabled = true;
  document.getElementById('inicio').style.backgroundColor = '#363636';
  document.getElementById('inicio').style.opacity = 0.5;
  document.getElementById('inicio').style.cursor = 'default';
}

//botoes das escolhas
function btPedra1() {
  escolhaJogador1 = 'pedra';
  return escolhaJogador1;
}
function btPedra2() {
  escolhaJogador2 = 'pedra';
  return escolhaJogador2;
}
function btPapel1() {
  escolhaJogador1 = 'papel';
  return escolhaJogador1;
}
function btPapel2() {
  escolhaJogador2 = 'papel';
  return escolhaJogador2;
}
function btTesoura1() {
  escolhaJogador1 = 'tesoura';
  return escolhaJogador1;
}
function btTesoura2() {
  escolhaJogador2 = 'tesoura';
  return escolhaJogador2;
}

function jogar() {
  //desabilita o input do nickname para impossibilitar a mudança
  document.getElementById('jogador1').disabled = true;
  document.getElementById('jogador2').disabled = true;

  //verifica se os jogadores fizeram uma escolha
  if (escolhaJogador1=='' || escolhaJogador2=="") {
    alert("Os dois jogadores devem fazer uma escolha")
    return
  }

  //atualiza as rodadas
  rodada += 1;
  document.getElementById('rodada').innerText = `Rodada ${rodada}`;
  document.getElementById("escolhaNaTela1").innerText = `Escolheu ${escolhaJogador1}`;
  document.getElementById("escolhaNaTela2").innerText = `Escolheu ${escolhaJogador2}`;

  //comparar as escolhas dos jogadores
  if (escolhaJogador1 == escolhaJogador2) {
    diagnostico = `Empate!`;
    pontosJogador1 += 1;
    pontosJogador2 += 1;
  } else if (escolhaJogador1 == 'pedra' && escolhaJogador2 == 'tesoura') {
    diagnostico = `O vencedor da rodada foi ${nickname1}`;
    pontosJogador1 += 1;
  } else if (escolhaJogador2 == 'pedra' && escolhaJogador1 == 'tesoura') {
    diagnostico = `O vencedor da rodada foi ${nickname2}`;
    pontosJogador2 += 1;
  } else if (escolhaJogador2 == 'pedra' && escolhaJogador1 == 'papel') {
    diagnostico = `O vencedor da rodada foi ${nickname1}`;
    pontosJogador1 += 1;
  } else if (escolhaJogador1 == 'pedra' && escolhaJogador2 == 'papel') {
    diagnostico = `O vencedor da rodada foi ${nickname2}`;
    pontosJogador2 += 1;
  } else if (escolhaJogador2 == 'tesoura' && escolhaJogador1 == 'papel') {
    diagnostico = `O vencedor da rodada foi ${nickname2}`;
    pontosJogador2 += 1;
  } else if (escolhaJogador1 == 'tesoura' && escolhaJogador2 == 'papel') {
    diagnostico = `O vencedor da rodada foi ${nickname1}`;
    pontosJogador1 += 1
  }

  //mostra a pontuação atual na tela e o resultado da rodada
  document.getElementById('pontosJogador1').innerText = `Pontos: ${pontosJogador1}`
  document.getElementById('pontosJogador2').innerText = `Pontos: ${pontosJogador2}`
  document.getElementById('resultado').innerText = diagnostico;

  //apaga a escolha anterior para inserir novas e não reutilizar a da jogada anterior
  escolhaJogador1 = "";
  escolhaJogador2 = "";

  //VERIFICAÇÃO DE VENCEDOR
  if ((pontosJogador1 == 3 && pontosJogador2 == 3)) {
    mensagemParabens = `Rodada ${rodada}` + '<br>' + 'A PARTIDA EMPATOU' + '<br>' + `Parabens ${nickname1} e ${nickname2}!!!`;
    document.getElementById("mensagemVencedor").innerHTML =  mensagemParabens;
    document.getElementById("imagemVencedor").src = "https://acegif.com/wp-content/uploads/funny-celebrate-8.gif";
    zerarJogo();
  } else if (pontosJogador2 == 3) {
    mensagemParabens = `Rodada ${rodada}` + '<br>' + `VENCEDOR DA PARTIDA: ${nickname2}.` + '<br>' + 'Parabens!!!';;
    document.getElementById("mensagemVencedor").innerHTML = mensagemParabens;
    document.getElementById("imagemVencedor").src = "https://acegif.com/wp-content/uploads/funny-celebrate-8.gif";
    zerarJogo();
  } else if (pontosJogador1 == 3) {
    mensagemParabens = `Rodada ${rodada}` + '<br>' + `VENCEDOR DA PARTIDA: ${nickname1}.` + '<br>' + 'Parabens!!!';
    document.getElementById("mensagemVencedor").innerHTML =  mensagemParabens;
    document.getElementById("imagemVencedor").src = "https://acegif.com/wp-content/uploads/funny-celebrate-8.gif";
    zerarJogo();
  } 
}

function zerarJogo() {
  //limpa todos os dados da partida anterior
  pontosJogador1 = 0;
  pontosJogador2 = 0;
  escolhaJogador1 = "";
  escolhaJogador2 = "";
  rodada = 0;
  document.getElementById('rodada').innerText = "";
  document.getElementById('resultado').innerText = '';
  document.getElementById("jogador1").value = "";
  document.getElementById("jogador2").value = "";
  document.getElementById('pontosJogador1').innerText = `Pontos: 0`;
  document.getElementById('pontosJogador2').innerText = `Pontos: 0`;
  document.getElementById("escolhaNaTela1").innerText = "";
  document.getElementById("escolhaNaTela2").innerText = "";

  //reativa o input do nickname para possibilitar a mudança
  document.getElementById('jogador1').disabled = false;
  document.getElementById('jogador2').disabled = false;

  //detalhes da estilização (css)
  document.getElementById("parabens").style.display = "flex";
  document.getElementById("game").style.display = "none";
  document.getElementById('inicio').disabled = false;
  document.getElementById('inicio').style.backgroundColor = '#d16940';
  document.getElementById('inicio').style.opacity = 1;
  document.getElementById('inicio').style.cursor = 'pointer';
}