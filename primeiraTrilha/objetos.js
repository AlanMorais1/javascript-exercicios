const pessoa = {
        nome: 'Ana',
        idade: 26,
        temCNH: true
}

pessoa.sobrenome = 'Paula'
console.log('Nome: ', pessoa.nome)

console.log('Sobrenome: ', pessoa.sobrenome)

const livro = {
    título: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    paginas: 310
}
livro.publicado = true
livro.idiomas = [
    'ingles',
    'português',
    'espanhol'
]

livro.idiomas.push('francês') // acrecentar um novo idioma ao array de idiomas do livro
livro.idiomas.push('alemão')

console.log('Livro antes:', livro)

delete livro.paginas // deletar a propriedade paginas do livro

console.log('Livro depois:', livro)

console.log('Autor do livro', livro['autor']) // acessar a propriedade autor do livro usando colchetes


const autor = {
    nome: 'J.R.R. Tolkien',
    nacionalidade: 'Britânico',
    idade: 98,
    livros: ['O Hobbit', 'O Senhor dos Anéis']
}
console.log('Autor', autor)

livro.autor = autor // associar o objeto autor ao livro

console.log(livro)

livro.autor.nome
livro.autor.nacionalidade