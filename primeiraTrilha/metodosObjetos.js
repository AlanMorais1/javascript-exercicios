const pessoa = {
    nome: 'Alan',
    idade: 32,
    pets: ['Zaion', 'Theo'],
    nacionalidade: 'Brasileira',
}

// percorrer o objeto pessoa usando for...in
// for in é somente para objetos
for(const chave in pessoa) {
    console.log('Chave: ',chave) // exibe a chave do objeto
    console.log('Valor: ', pessoa[chave]) // exibe o valor da chave do objeto
}

const chaves = Object.keys(pessoa);     // retorna um array com as chaves do objeto pessoa

const valores = Object.values(pessoa);   // retorna um array com os valores do objeto pessoa

const entradas = Object.entries(pessoa);   // retorna um array de arrays, onde cada sub-array contém uma chave e seu valor correspondente do objeto pessoa

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Entradas (chave/valor): ', entradas) 