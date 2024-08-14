/*

OBJETIVO 1 - QUANDO O USUÁRIO CLICAR NA SETA AVANÇAR, IR PARA PRÓXIMA CARTA
    
    passo 1 - pegar o elemento HTML da seta avançar

    passo 2 - dar um jeito de identificar quando o usuário clicar nele

    passo 3 - mudar para a próxima carta da lista

    passo 4 - esconder a carta que estava selecionada

OBJETIVO 2 - QUANDO O USUÁRIO CLICAR NA SETA VOLTAR, IR PARA CARTA ANTERIOR
    
    passo 1 - pegar o elemento HTML da seta voltar

    passo 2 - dar um jeito de identificar quando o usuário clicar nele

    passo 3 - mudar para a carta anterior da lista

    passo 4 - esconder a carta que estava selecionada

*/

// passo 1 - pegar o elemento HTML da seta avançar

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function mostrarCartaoSelecionado(){
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

btnAvancar.addEventListener("click", function () {

    if(cartaoAtual === cartoes.length - 1){
        return;
    }

    esconderCartaoSelecionado();

    cartaoAtual++;

    mostrarCartaoSelecionado();
});

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual < 1){
        return;
    }

    esconderCartaoSelecionado();

    cartaoAtual--;

    mostrarCartaoSelecionado(); 
});

document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio-site');
    audio.play();
});

document.getElementById('stopButton').addEventListener('click', function() {
    var audio = document.getElementById('audio-site');
    audio.pause();
    audio.currentTime = 0;  // Reseta o áudio para o início
});