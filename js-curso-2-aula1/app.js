let listaNumerosSorteados = [];
let numMax = 10;
let numSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let botaoNovoJogo = document.getElementById('reiniciar');

function exibirTextoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(numMax * Math.random() + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;
    console.log(numeroEscolhido);

    if(quantidadeDeElementosLista == numMax) return listaNumerosSorteados = [];

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e ' + numMax);
}

function verificarChute(){    
    let chute = document.querySelector('input').value;
    if(chute == numSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = 'Você acertou com ' + tentativas + ' ' + palavraTentativa + "!";
        exibirTextoNaTela('h1', 'ACERTOU!');
        exibirTextoNaTela('p','Você descobriu o Número Secreto!\n' + mensagem);
        botaoNovoJogo.removeAttribute('disabled');
    }

    else{
        if(chute > numSecreto) exibirTextoNaTela('h1', 'ERROU!'), exibirTextoNaTela('p','O número secreto é menor que ' + chute);
        else exibirTextoNaTela('h1', 'ERROU!'), exibirTextoNaTela('p','O número secreto é maior que ' + chute);
        tentativas++
        limparCampo();
    };
}

function reiniciarJogo() {
    numSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirTextoMensagemInicial();
    botaoNovoJogo.setAttribute('disabled', true);
}

exibirTextoMensagemInicial();
