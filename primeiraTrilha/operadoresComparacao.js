const idadeVinny = 36
const minhaIdade = 32 // posso colocar como string que o JS vai fazer a comparação também '36'

// Operador de igualdade
const saoIguais = idadeVinny == minhaIdade
console.log('São iguais? ', saoIguais)

const comparacao = idadeVinny == minhaIdade
console.log('São iguais? ', comparacao)

// Operador de maior que
const maior = idadeVinny > minhaIdade
console.log('São iguais? ', maior)

// menor que
const menor = idadeVinny < minhaIdade
console.log('São iguais? ', menor)

// maior ou igual
const maiorIgual = idadeVinny >= minhaIdade
console.log('São iguais? ', maiorIgual)

const idade = 36
const idadeImao = 16

const souMaiorDeIdade = idade >= 18
const irmaoMaiorDeIdade = idadeImao >= 18

console.log('Sou maior de idade? ', souMaiorDeIdade)
console.log('Meu irmão é maior de idade? ', irmaoMaiorDeIdade)

// Comparação estrita - Se coloca-se a minha idade em string '36' da false
// em == daria true mas em === da false por medificar a leitura
const comparacaoEstrita = minhaIdade === idadeVinny
console.log('São estritamente iguais? ', comparacaoEstrita)

// se eu quiser saber se a comparação ao inves de ser igual, ser diferente

const comparacaoDiferente = idadeVinny != minhaIdade
console.log('É diferente? ', comparacaoDiferente)

const comparacaoEstritamenteDiferente = idadeVinny !== minhaIdade
console.log('É estritamente diferente? ', comparacaoEstritamenteDiferente)

// São iguais?  false
//São iguais?  false
//São iguais?  true
//São iguais?  false
//São iguais?  true
//Sou maior de idade?  true
//Meu irmão é maior de idade?  false
//São estritamente iguais?  false
//É diferente?  true
//É estritamente diferente?  true
