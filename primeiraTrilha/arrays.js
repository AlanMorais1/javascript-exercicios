 const frutas = [ 'Maçã', 'Banana', 'Laranja', 'Uva', 'Abacaxi']
console.log(frutas)

/* console.log('A primeira fruta: ', frutas[0])

console.log('Ultima fruta: ', frutas[4])

console.log('Total de frutas: ', frutas.length) // somar a quantidade de itens no array

// adicionar um item no final do array
frutas.push('Manga')
console.log('Total de frutas depois de adicionar manga: ', frutas.length)

console.log('Ultima fruta: ', frutas[frutas.length -1]) // acessar o ultimo item do array */

//frutas.splice(2, 1) // remover um item do array, o primeiro número é o indice do item a ser removido e o segundo número é a quantidade de itens a serem removidos
//console.log('Frutas depois de remover a laranja: ', frutas)


// percorrer o array com um loop for
//Ele é poderoso e te dá controle total: você decide o ponto de partida, a condição de parada e o que acontece a cada repetição. Mas esse controle todo pode deixar o código mais difícil de ler, especialmente para quem está começando.

for (let i = 0; i < frutas.length; i++) {
    console.log('indice: ', i)
    console.log(frutas[i])
}

// OUTRA FORMA FOREACH
//Você não precisa se preocupar com o índice nem com o tamanho do array. É só dizer o que quer fazer com cada item.

console.log('--- FOREACH ---')

frutas.forEach((valor, indice) => {
    console.log('Indice: ', indice, valor)
})

// outra fora FOR OF
//Ele é ótimo para quando você só quer acessar os valores, um por um, sem se preocupar com índices.
console.log('--- FOR OF ---')

for (const fruta of frutas) {
    console.log('Fruta da vez: ', fruta)
}