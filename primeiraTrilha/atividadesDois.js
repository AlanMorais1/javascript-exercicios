// 1 

const idade = 18
const maiorIdade = idade >= 18
const maiorDeDezoito = true

console.log('Maria é maior de idade? ', maiorDeDezoito)

//2 

let portugues = 7
let matematica = 9

const media = (portugues + matematica) / 2

if (media >= 7) {
    
    console.log("Aprovado")

} else {
    console.log('Reprovado')
}


// 3 

let valorCompra = 35.90
let valorPago = 50

let troco = valorPago - valorCompra

console.log('Troco a devolver é: R$', troco.toFixed(2))

// 4

let senha1 = '123a'
let senha2 = '123a'

let senhas = senha1 === senha2

console.log('As senhas digitadas são iguais? ', senhas)

// 5

let totalAulas = 80
let faltas = 25

let totalDeFaltas = totalAulas * 0.25

console.log('O total de faltas é de: ', totalDeFaltas)

// 6

let temLogin = true
let temSenha = true

let acesso = temLogin && temSenha
console.log('Acesso permitido? ', acesso)

// 7

let disponivel = true

console.log('Esta disponível: ' + !disponivel)

// 8

let numero1 = 6
let numero2 = 6

if (numero1 % 2 === 0 && numero2 % 2 === 0 && numero1 === numero2) { 

console.log("Os números são pares e iguais."); 

} else { 

console.log("Os números são diferentes e não são pares."); 

}

// 9

let numero3 = 120
let porcentagem = 0.15

let valorPorcentagem = numero3 * porcentagem

console.log('15% de 120 é igual a: ', valorPorcentagem)

// 10

let resultado = 2+3*5

console.log('resultado: ', resultado)

// A multiplicação veio primeiro, seguindo a regra de preferência matematica
// Se a soma fosse primeiro, teria que usar () para ser a primeira operação


//Maria é maior de idade?  true
//Aprovado
//Troco a devolver é: R$ 14.10
//As senhas digitadas são iguais?  true
//O total de faltas é de:  20
//Acesso permitido?  true
//Esta disponível: false
//Os números são pares e iguais.
//15% de 120 é igual a:  18
//resultado:  17