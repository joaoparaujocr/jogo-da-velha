let jogador = null;
let hasWinner = false;
let numeroDeJogadas = 0;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
const quadrados = document.querySelectorAll('.quadrado');
const vencedorLabel = document.querySelector('#vencedor-selecionado');
const buttonReset = document.querySelector('#reiniciar');

mudarJogador('X');

function escolherQuadrado(id) {

    let quadrado = document.getElementById(id);
    if (quadrado.textContent !== '-' || hasWinner) return;

    numeroDeJogadas++;

    quadrado.textContent = jogador;
    quadrado.style.color = 'white';

    hasWinner = checarVencedor();
    if (numeroDeJogadas === 9) deuVelha();

    jogador = jogador === 'O' ? 'X' : 'O';

    mudarJogador(jogador);

}

function deuVelha() {
    vencedorLabel.innerHTML = 'DEU VELHA, REINICIE O JOGO';
    hasWinner = true;
    for (let i in quadrados) {
        quadrados[i].style.backgroundColor = '#fc3f3f';
    }
}

function mudarJogador(value) {

    jogador = value;
    jogadorSelecionado.innerHTML = jogador;

}

function checarVencedor() {
    //linhas horizontais
    if (verificandoOsQuadrados(quadrados[0], quadrados[1], quadrados[2])) return true;
    if (verificandoOsQuadrados(quadrados[3], quadrados[4], quadrados[5])) return true;
    if (verificandoOsQuadrados(quadrados[6], quadrados[7], quadrados[8])) return true;

    //linhas verticais
    if (verificandoOsQuadrados(quadrados[0], quadrados[3], quadrados[6])) return true;
    if (verificandoOsQuadrados(quadrados[1], quadrados[4], quadrados[7])) return true;
    if (verificandoOsQuadrados(quadrados[2], quadrados[5], quadrados[8])) return true;

    //linhas horizontais
    if (verificandoOsQuadrados(quadrados[0], quadrados[4], quadrados[8])) return true;
    if (verificandoOsQuadrados(quadrados[2], quadrados[4], quadrados[6])) return true;
}

function verificandoOsQuadrados(quadrado1, quadrado2, quadrado3) {
    console.log(quadrado1.textContent)
    if (quadrado1.textContent !== '-' && quadrado1.textContent === quadrado2.textContent && quadrado2.textContent === quadrado3.textContent){
        vencedorLabel.innerHTML = `Ganhou o '${jogador}'`;
        mudarCorDeFundo(quadrado1,quadrado2, quadrado3);
        return true;
    }
    return false;
}

function mudarCorDeFundo(q1, q2, q3) {
    q1.style.backgroundColor = '#1be059';
    q2.style.backgroundColor = '#1be059';
    q3.style.backgroundColor = '#1be059';
}

function reset() {
    mudarJogador('X');
    vencedorLabel.textContent = ' ';
    hasWinner = false;
    numeroDeJogadas = 0;
    for (let i in quadrados) {
        quadrados[i].style.color = 'black';
        quadrados[i].style.backgroundColor = 'black';
        quadrados[i].innerHTML = '-';
    }
}