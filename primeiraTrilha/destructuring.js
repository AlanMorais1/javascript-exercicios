const pessoa = {
    nome: 'Natalia',
    idade: 17,
    profissão: 'Estudante'
}

//console.log(pessoa.nome)
//console.log(pessoa.idade)


const { nome, idade,} = pessoa

console.log('Nome: ', nome)
console.log('Idade: ', idade)

//function saudacao(pessoa) {
//    console.log('Olá, ', pessoa.nome)
//}

// esse modo é o mesmo que o de cima, só que usando a desestruturação diretamente nos parâmetros da função
function saudacao({ nome, idade }) {
    console.log('Olá, ', nome)
    if (idade > 18) {
        console.log('maior de idade')
    }
}

saudacao(pessoa)

const frutas = [ 'uva', 'banana']
const [primeira, segunda] = frutas