let numeroSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
mensagemTelaInicial()

// Funcão com parâmetros, Para usar a mesma com coisas diferentes, basta substituir o entre parenteses na hora de chamar-la
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemTelaInicial(){
    // Aqui chamamos a função com parâmetros do jeito que precisarmos
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// Função simples, sem parâmetros
function verificarChute(){   
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
        
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
        } else{
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++
        limparChute();       
    }
}

// Função sem parâmetros porém com RETURN, para conseguir armazenar seu resultado em uma variavel
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantiaLista = numeroSorteados.length;
    if (quantiaLista == numeroLimite){
        numeroSorteados = []
    }

    if (numeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        numeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// Função para limpar o campo digitado após um chute
function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

// Função para reiniciar o jogo quando o botão for apertado
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    mensagemTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}