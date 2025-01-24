let altura = 1.68;
let peso =86;

function indiceMassaCorporia(altura,peso){
    console.log(peso*(Math.pow(altura,-2)));
}

indiceMassaCorporia(altura,peso);

function calculoFatorial(number){
    let resultado
    let contador
    if (number == 0 || number == 1){
        resultado = 1;
    }
    else{
        contador = number;
        resultado = number
        do{
        contador--;
        resultado = resultado * contador;
            
        }while(contador > 1);
        
    }
    return resultado; 
}

console.log(calculoFatorial(2)); 

function conversoDolaReal(dolar){
    return 4.80*dolar;
}

console.log(conversoDolaReal(20));

function calculadorTabuada(number){
    let contador = 0;
    while (contador < 10){
        contador++;
        console.log(`${number} x ${contador} = ${number*contador} `);
    }
}

calculadorTabuada(10);