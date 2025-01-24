alert( "bem-vindo ao nosso site");
let nome = "lua";
let idade = 25;
let numeroDeVendas = 1000;
let chute = prompt("Escolha um número entre 1 e 10");
let mensagemDeErro = "ERRO! preencha todos os campos";
alert ("ERRO! preencha todos os campos");
alert (mensagemDeErro);
nome = prompt("Qual o seu nome");
idade = prompt ("digite sua idade")
if (idade >= 18){
    alert("Pode tirar habilitação")
}
// exercicio 1
let diaSemana = prompt("qual o dia da semana ?");
let dia1 = "sabado";
let dia2 = "domingo";

if (diaSemana == dia1 || diaSemana == dia2){
    alert("bom fim de semana!");
}
else{
    alert("boa semana");
}

//exercicio  2
let numeroUsuario = prompt("digite um numero");

if (numeroUsuario < 0 ){
    alert(`o ${numeroUsuario} é negativo`);
}
else {
    alert(`o ${numeroUsuario} é positivo`);
}

//exercicio 3
let pontuacao = prompt("digite sua pontução");

if (pontuacao > 100){
    alert("parabénsvocê venceu");
}
else {
    alert("tente novamente para ganhar");
}

// exercicio 4

let saldoConta = 1500.00;

console.log(`olá seu saldo é: ${saldoConta}`);

// exercicio 5

let nomeDeUsusario = prompt("digite seu nome");

alert(`ola ${nomeDeUsusario} seja bem-vindo`);

// exercicio loop 1
let contador = 1;

while ( contador < 10 ){
    console.log(contador);
    contador++;
}

// exercicio loop 2

let contadorr = 10;

while ( contador > 0){
    console.log(contador)
    contador--;
}

// exerccicio loop 3

let numeroContagemRefresiva = prompt("digite um numero");

while ( numeroContagemRefresiva >= 0){
    console.log(numeroContagemRefresiva);
    numeroContagemRefresiva--;
}

// exercicio loop 4

let numeroContagem = prompt("digite um numero");
let contador1 = 0;

while (contador1 <= numeroContagem){
    console.log(contador1);
    contador1++;
}
