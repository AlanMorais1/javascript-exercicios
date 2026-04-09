// 1

let nome = 'Alan Christian Morais'

console.log('Olá, '+ nome +'! Seja bem vindo ao curso JavaScript')

// 2

let anoAtual = 2025

let anoNascimento = 1993

let idade = anoAtual - anoNascimento

console.log('Você tem',idade,'anos')

//3

let cidade = 'Olímpia'

let estado = 'São Paulo'

let pais = 'Brasil'

console.log('Você está em', cidade,'-',estado,',',pais)

// 4

let temCarteira = true

console.log(typeof temCarteira)

// 5

let saldoInicial = 0

let deposito = 200

let saque = 50

let saldoAtual = (saldoInicial + deposito) - saque

console.log('Seu saldo atual é de: ',saldoAtual)

// 6

let matematica = 7

let portugues = 6

let ciencias = 8

let media = (matematica + portugues + ciencias) / 3

console.log('Sua média de notas é de: ',media)

// 7

let salario = 3000

let aumentoSalario = 0.1

let salarioAtual = (salario * aumentoSalario) + salario

console.log('Seu salário atual é: ',salarioAtual)

// 8

let cliques = 0

cliques++;

cliques++;

cliques++;

console.log('o botão foi clicado,', cliques,'vezes')

// 9

const PI = 3.14

// let PI = 20
console.log('O valor de PI é: ',PI)
// o valor não pode ser alterado devido a constante ser fixa

// 10

let nomeTime1 = 'Corinthians'

let tituloMundial = 2

let nomeTime = 'Palmeiras'

const titulo = 0

let texto = 'O time ' + nomeTime1 + ' tem ' + tituloMundial + ' mundiais e o ' + nomeTime + ' tem ' + titulo +'.'

console.log(texto)

console.log(typeof texto)