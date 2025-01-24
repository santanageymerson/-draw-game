let titulo = document.querySelector('h1');
titulo.innerHTML = "hora do desafio";

function verificaConsole(){
    console.log("o botão foi clicado");
}

function mensagemAlert(){
    alert("Eu amo JS");
}

let cidadeDoBrasil

function cidadeDoBrasilPrompt(){
    cidadeDoBrasil = prompt("digite uma cidade do Brasil:");
    alert(`Estive em ${cidadeDoBrasil} e lembrei de você.`);
}

function resultadoSoma(){
    let numero1 = parseInt(prompt('digite um numero:'));
    let numero2 = parseInt(prompt('digite outro numero:'));
    let resultado = numero1+numero2;
    alert(`o resultado da soma de ${numero1} + ${numero2} é ${resultado}`);

}