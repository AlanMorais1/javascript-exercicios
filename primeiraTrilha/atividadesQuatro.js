// 1 Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

function saudacao(){
}
console.log('Olá mundo!')

// 2 Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."


  let nome = 'Alan'
  let idade = 32

function apresentarPessoa(nome, idade){

}
console.log('Olá, ', nome, 'a sua dade é', idade)

// 3 Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
//A função deve calcular o IMC utilizando a fórmula:

//IMC = peso / (altura * altura)

//A função deve retornar o valor do IMC.
//Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

let peso = 105
let altura = 1.81

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

console.log('O seu imc é: ', calcularIMC(peso, altura))

// 4 Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

let nota = 9

function verificarAprovacao(nota){
  if (nota >= 7){
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}

console.log(verificarAprovacao(nota))


// 5 Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.

function ehPar(numero){
  return numero % 2 === 0
}

console.log(ehPar(4))    // true
console.log(ehPar(7))    // false
console.log(ehPar(10))   // true
console.log(ehPar(15))   // false

// 6 Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.

let numero1 = 15
let numero2 = 10

function somaNumeros(numero1, numero2){
  return numero1 + numero2
}
console.log('A soma dos números é: ', somaNumeros(numero1, numero2))

// 7 Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
//A função deve receber dois parâmetros: valorCompra e valorPago.

//A função deve:

//calcular o valor do troco
//retornar o valor calculado
//Depois, utilize o retorno da função para exibir o valor do troco no console.

let valorCompra = 1890
let valorPago = 2000

function calcularTroco(valorCompra, valorPago){
  return valorPago - valorCompra
}
 
console.log('Você receberá de troco: R$ ', calcularTroco(valorCompra, valorPago))

// 8 Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.

let num1 = 15
let num2 = 10

const somaNum = (num1, num2) => num1 + num2

const numeroSoma = somaNum(num1, num2)
console.log('A soma dos números é: ', numeroSoma)

//OU

let num3 = 20
let num4 = 30

const somaNum2 = (num3, num4) => num3 + num4
console.log(' A soma dos numeros é: ', somaNum2(num3, num4))

//9 - Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".

//function executarAcao(acao) {
//  acao()
//}

//executarAcao(() => {
//  console.log("Executando ação!");
//})


function executarAcao(acao) {
  acao(); // executa a função recebida
}

function minhaAcao() {
  console.log("Executando ação!");
}

executarAcao(minhaAcao);



// 10 Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).
let respostaUsuario = "sim";

function fazerPergunta(pergunta, respostaCorreta) {
  console.log(pergunta);

  if (respostaUsuario === respostaCorreta) {
    console.log("Resposta certa!");
  } else {
    console.log("Resposta errada!");
  }
}
fazerPergunta("JavaScript é uma linguagem de programação?", "sim");
