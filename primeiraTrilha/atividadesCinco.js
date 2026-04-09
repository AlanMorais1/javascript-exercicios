// 1 Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const nomes = ['João', 'Maria', 'José', 'Ana', 'Carlos']

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

// 2 Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

const frutas = ['Maçã', 'Banana', 'Pera', 'Uva', 'Laranja']
console.log('Frutas antes:', frutas)

frutas.push('Manga')
console.log('Frutas depois de adicionar Manga:', frutas)

frutas.shift()
console.log('Frutas depois de remover a primeira:', frutas)

// 3 Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

const cidades = ['São Paulo', 'Olímpia', 'Campinas', 'Ribeirão Preto', 'Gramado']
console.log('Total de cidades: ', cidades.length)

// 4 Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let total = 0

for (let i = 0; i < numeros.length; i++) {
    total += numeros[i] 
}
console.log('Total da soma: ', total)

// 5 Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

const notas = [8, 9, 4, 7]

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]

}

const media = somaNotas / notas.length

if (media >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

// Posso usar no reduce para somar as notas de forma mais concisa, sem precisar criar uma variável externa para acumular a soma. O código ficaria assim:
/* const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0) */

// 6 Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

const usuarios = ['Alan', 'Nayara', 'Heloisa', 'Levi']

usuarios.forEach((usuario) => {
    console.log(`Olá, ${usuario}!`)
})

// 7 Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

const precos = [100, 200, 300, 400, 500]

const precosComDesconto = precos.map((preco) => {
    return preco * 0.90
})
console.log('Preços com desconto: ', precosComDesconto)

// 8 Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

const idades = [15, 32, 55, 60, 45, 12, 18]

const idadesAdultas = idades.filter((idade) => {
    return idade >= 18
})
console.log('Idades maiores ou iguais a 18: ', idadesAdultas)

// 9 Crie um array com os preços de produtos em um carrinho de compras.
/* Utilize um laço for ou for...of para calcular o valor total da compra.

Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console. */

const carrinho = [50, 100, 140, 300, 200]

let totalCompra = 0

for (const item of carrinho) {
    totalCompra += item
}
console.log('Valor total: ', totalCompra)

const valorDesconto = totalCompra * 0.80
console.log('Valor final com desconto: ', valorDesconto)

// 10  Crie dois arrays: um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

const tarefas = ['Estudar JavaScript', 'Trabalhar', 'Fazer compras', 'Limpar a casa', 'Lavar o carro']
const tarefasConcluidas = [true, true, false, true, false]

const tarefasPendentes = tarefas.filter((tarefa, indice) => {
    return !tarefasConcluidas[indice]
})
console.log('Tarefas pendentes: ', tarefasPendentes)