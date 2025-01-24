//let titulo = document.querySelector('h1'); //query significa consulta --> nesse caso estamos manipulando uma teg no documento(arquivo) html e selecionando a tag h1 através do comando querySelector 
//titulo.innerHTML = 'jogo do número secreto'; // coloca um texto na tag h1 através do metodo innertHTML --> ineer significa dentro(interno)

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = ' escolha um número entre 1 e 10';

let listaDeNumerosSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){  // criou uma função para otimizar o  codigo e diminuir as repetições 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2}); // ler o site através dessa função
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');  
}

exibirMensagemInicial();

//quando temos um onclick no html e queremos usarmos no arquivo javascript temos que botar o mesmo nome aqui 

function verificarChute(){  // essa função é chamada ao clicar o botão pois a tag butão tem onvlik definido com o mesmo nome da função
    let chute = document.querySelector('input').value; // semelhante com o colocar o texto na teg mas nesse caso pegamos o valor da tag input através do comando value. 
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o número secreto é menor!');
        }
        else{
            exibirTextoNaTela('p','o número secreto é maior');
        }
        tentativas++;
        limpaCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeNumeroEscolhido = listaDeNumerosSorteado.length;
    if (quantidadeDeNumeroEscolhido == numeroEscolhido){
         listaDeNumerosSorteado = [];
    }
    if (listaDeNumerosSorteado.includes(numeroEscolhido)){ // metodo includes verifica se o elemento está na lisa
         return gerarNumeroAleatorio(); // recursão: a função chama ela de novo pois o numero criado ja está na lista
    }
    else{
     listaDeNumerosSorteado.push(numeroEscolhido) // metodo push adiciona um item ao final da alista
     return numeroEscolhido;
    }
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);// altera  id da tag butonn para disabled 
}