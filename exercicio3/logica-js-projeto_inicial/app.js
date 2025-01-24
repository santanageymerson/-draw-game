//function exibirNaTela(tag,texto){
//    let campo = document.
//}
let nome = 'geymerson'

function olaMundo(name){
    console.log(`olá ${name}!`);
}
olaMundo(nome);

let numero1, resultado;

numero1 = 5;

function dobroNumero(number){
    return number*2;
}

console.log( dobroNumero(numero1));

let numero2, numero3;
numero2 = 2;
numero3 = 4;

function mediaNumero(number,number2,number3){
    return (number+number2+number3)/3;
}

console.log(mediaNumero(numero1,numero2,numero3));

function maiorNumero(number,number2){
    if (number>number2){
        return number;
    }
    else{
        return number2;
    }
}
console.log(maiorNumero(numero1,numero2))

function multiplicarNumero(number2){
    return number2*number2;
}

console.log(multiplicarNumero(numero2))