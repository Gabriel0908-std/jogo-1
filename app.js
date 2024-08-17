let listasDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate :1.2});
}

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        if (tentativas == 1) {
            exibirTextoNaTela('h1', 'Você acertou');
            exibirTextoNaTela('p', 'Que sorte! Você conseguiu de primeira');
        } else { 
        exibirTextoNaTela('h1', 'Você Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} tentativas`
        exibirTextoNaTela('p', `${mensagemTentativas}`);
        }
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute >= numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteadosNaLista = listasDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteadosNaLista == numeroLimite) {
        listasDeNumerosSorteados = [];
    }
    if (listasDeNumerosSorteados. includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listasDeNumerosSorteados.push(numeroEscolhido);
        console.log(listasDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}