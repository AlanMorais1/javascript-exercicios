// 1 contador de 1 a 10

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2 soma de 1 a 100

let soma = 0

for (let i = 1; i <= 100; i++){
    soma += i;
}
console.log('soma de 1 a 100: ' + soma)

// 3 tabuada personalizada

let numeroTabuada = 7

for (let i = 1; i <= 10; i++){
    console.log(numeroTabuada + 'x' + i + "=" + (numeroTabuada * i))
}

// 4 contagem regressiva com while

let contagem = 10

while (contagem >= 0){
    console.log(contagem)
    contagem-- 
}
console.log('Contagem finalizada!')

// 5 Receber números até digitar 0 (simulado com array)

let numeroDigitado
let quantidade = 0
let repeticoes = 0

do {
    // simulação manual de entrada
    if (repeticoes === 0){
        numeroDigitado = 5
    }else if (repeticoes === 1){
        numeroDigitado = 10
    }else {
        numeroDigitado = 0
    }
    if (numeroDigitado !== 0){
        quantidade++
    }
    repeticoes++
}while (numeroDigitado !== 0)
    console.log("Total de números digitados: " + quantidade)

// 6 jogo do numero secreto  

let numeroSecreto = 7

for (let tentativa = 1; tentativa <= 3; tentativa++){
let numeroTentado

if (tentativa === 1){
    numeroTentado = 3
}else if (tentativa === 2){
    numeroTentado = 5
}else {
    numeroTentado = 7
}
if (numeroTentado === numeroSecreto){
    console.log('Acertou!')
}else {
    console.log('Tente novamente!')
}
}

// 7 Idade ao longo dos anos

let anoNascimento = 2000
let anoAtual = 2025

for (let ano = anoNascimento; ano <= anoAtual; ano++){
    console.log('Em ' + ano + ' você tinha ' + (ano - anoNascimento) + ' anos')
}

// 8 Listando numeros pares entre 1 e 50
for (let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// 9 contador multiplo de 3 entre 1 e 100

let multiplosDe3 = 0

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0){
        multiplosDe3++
    }
}
console.log('numeros entre 1 e 100 divisivies por 3: ' + multiplosDe3)

// 10 menu repetição

let opcao;
let passo = 0 

do {
    // simulação da escolha do usuário
    if (passo === 0){
        opcao = 1
    }else if (passo === 1){
        opcao = 2
    }else {
        opcao = 3
    }
    if ( opcao === 1){
        console.log('ver saldo')
    }else if (opcao === 2){
        console.log('Fazer depósito')
    }else if (opcao === 3){
        console.log('Sair')
    }
    passo++
}while (opcao !== 3)

// 11 exemplo de for 


for (let i = 0, j = 10; i < j; i++, j--) { 

console.log(`i: ${i}, j: ${j}`); 

} 

// Resultado: 

// i: 0, j: 10 

// i: 1, j: 9 

// i: 2, j: 8 

// i: 3, j: 7 

// i: 4, j: 6 