alert("Boas vindas ao jogo do numero secreto");
let numerMaximo = 5000;
let numeroScreto = parseInt(Math.random()*numerMaximo +1); // parseInt transforma o numero em inteiro. math é abiblioteca e random é a função de numero aleatório
//let numeroScreto = parseInt(Math.random()*3 )+1;
console.log(numeroScreto);

let chute;
let tentativas = 1;

while (chute != numeroScreto) {
  chute = prompt(`Escolha um número entre 1 e ${numerMaximo}`);
  if (numeroScreto == chute) {
    break;
  } else {
    if (chute > numeroScreto) {
      alert(`Número secreto é menor que ${chute}`);
    } else {
      alert(`Número secreto é maior que ${chute}`);
    }
    tentativas ++
  }
}

let palavraTentativas = tentativas > 1  ? "tentativas": "tentativa" ;
alert(`isso ai! você descobiu o número secreto ${numeroScreto} com ${tentativas} ${palavraTentativas}.`);

//if (tentativas > 1){
//    alert(`isso ai! você descobiu o número secreto ${numeroScreto} com ${tentativas} tentativas`); // templet string
//}
//else{
 //   alert(`isso ai! você descobiu o número secreto ${numeroScreto} com ${tentativas} tentativa`);
//}