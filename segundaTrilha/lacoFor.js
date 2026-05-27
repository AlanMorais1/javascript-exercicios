// Laço For

const numero = 7;

for (let i = 0; i < 10; i++) {
  const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
} 

// Gerar números aleatórios de 1 a 50 e laço caso o número gerado seja 15.
// Interromper depois de 50 tentativas e cortar a quantidade de tentativas

for (let contador = 1; contador <= 50; contador ++) {
    const numero1 = Math.floor(Math.random() * 50 -1 +1) + 1;
    if(numero1 === 15) {
        console.log(`${numero1} em ${contador} tentaivas`);
        break;
    }   
}

// USAR O CONTINUE
// Criar um contador que só é incrementado caso os números NÃO sejam divisiveis por 5

let contador1 = 0

for (let i = 1; i <= 20; i++) {
    const numero2 = Math.floor(Math.random() * 50 -1 +1) + 1;
    if(numero2 % 5 === 0){
        continue
    }
    contador1++
}
console.log('contador', contador1);


// GERAR UM LAÇO QUE TENTE "ADIVINHAR" UM DADO NÚMERO DE 1 A 50
// E CONTE A QUANTIDADE DE TENTATIVAS ATÉ O RESULTADO

const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroAleatorio !== numeroSecreto) {
    numeroAleatorio = Math.floor(Math.random() * 50 -1 +1) + 1;
    tentativas++;
}
console.log(`O número secreto era ${numeroSecreto} e foram necessárias ${tentativas} tentativas.`);

// CRIAR UM LAÇO QUE GERE UM NÚMERO ALEATÓRIO DE 1 50
// EXECUTAR O LAÇO ENQUANTO NÃO GERAR UM NÚMERO PAR

let numeroRandom = 0

do {
    numeroRandom = Math.floor(Math.random() * 50 -1 +1) + 1;
} while (numeroRandom % 2 !== 0);
console.log(numeroRandom);

// CRIAR UM LAÇO QUE RECEBE UM TEXTO E VERIFICA SE É UM PALÍNDROMO
// IMPRIMIR NO CONSOLE O TEXTO, INFORMANDO SE É OU NÃI UM PALÍNDROMO

//const texto = "arara";
//const texto = "alura";
const texto = 'luz azul'

// const textoReverso = texto.split("").reverse().join("");

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}
// console.log(textoInvertido);
const result = texto === textoInvertido 
 ? `${texto} é um palíndromo.` 
 : `${texto} não é um palíndromo.`;
console.log(result);

// luz azul não é um palíndromo devido a ter espaço e ser considerado caractere diferente
// seria necessario retirar os espaços para considerar apenas as letras, ou seja, "luzazul" seria um palíndromo.        
