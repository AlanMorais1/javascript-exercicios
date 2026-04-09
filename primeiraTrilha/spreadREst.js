let alan1 = {
    nome: 'Alan',
    idade: 32,
    profissao: 'Desenvolvedor',
}

// fazer a clonagem de um objeto usando o operador spread

const alan2 = {...alan1} // cria um novo objeto alan2 com as mesmas propriedades e valores de alan1

alan2.idade = 33 // altera a idade de alan2 para 33, sem afetar alan1

console.log('alan1: ', alan1)
console.log('alan2: ', alan2)

// criar um novo objeto alan1 com as mesmas propriedades e valores de alan2, mas com algumas propriedades adicionais ou modificadas usando o operador spread
alan1 = {
    ...alan2,
    profissao: 'Empreendedor Digital',
    possuiEmpresa: true,

}

console.log(alan1)

const { nome, ...restante } = alan1 // usa destructuring para extrair a propriedade nome de alan1 e armazenar o restante das propriedades em um novo objeto chamado restante

console.log('Nome: ', nome) // exibe o valor da propriedade nome
console.log('Restante: ', restante) // exibe o objeto restante, que contém as outras propriedades de alan1, exceto nome