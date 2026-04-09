// 1
const idade = 18

idade >= 18 ? console.log('Pode comprar bebidas alcoólicas') : console.log('Você não pode comprar bebidas alcoólicas')

// 2

const horaAtual = 23

if (horaAtual >= 6 && horaAtual < 12){
    console.log('Bom dia')
} else if(horaAtual >= 12 && horaAtual < 18){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}

// 3

const numero = -1

if(numero > 0){
    console.log('Positivo')
} else if(numero < 0){
    console.log('Negativo')
}else{
    console.log('Número zero')
}

// 4

const nota = 9.5

if(nota >= 9){
    console.log('A')
} else if( nota >= 8){
    console.log('B')
} else if( nota >= 6){
    console.log('C')
} else if( nota >= 4){
    console.log('D')
} else{
    console.log('E')
}

// 5

let numeroPar = 2

let resultado = (numeroPar % 2 === 0) ? 'Par' : 'Impar'

console.log('Este número é: ', resultado)

// 6

let opcao = 1

switch(opcao){
case 1:
    console.log('Cadastrar')
    break

case 2:  
    console.log('Listar')
    break

case 3:
    console.log('Sair')
    break

default:
    console.log('Opção Invalida')
    break    

}

// 7 

let email = ''

if(email === ''){
    console.log('Preencha o campo do email')
}else {
    console.log('E-mail válido')
}

// 8

let senha = '1234as'

if (senha.length < 6){
    console.log('Senha deve conter minimo de 6 digitos')
}else {
    console.log('Senha válida')
}

// 9

let saldoDisponível = 500.00
let valorCompra = 400.00

if(valorCompra <= saldoDisponível){
    console.log('Compra aprovada')
}else {
    console.log('Saldo insuficiente')
}

// 10

let nome = 'Lisa'
let email1 = 'visualcode@gmail.com'
let idade10 = 19

if(nome !== '' && email1.includes('@') && idade10 > 0){
    console.log('Formulário enviado com sucesso')
}else {
    console.log('Preencha todos os campos corretamente')
}