const frutas = ['Maçã', 'Banana', 'Laranja']

const maisFrutas = ['Abacaxi', 'Uva', 'Melancia']

const clone = [...frutas]

const todasFrutas = [...frutas, ...maisFrutas]

frutas.push('Mamão')

console.log('Frutas: ', frutas)
console.log('Mais Frutas: ', maisFrutas)
console.log('Clone: ', clone)
console.log('Todas Frutas: ', todasFrutas)

const [primeiraFruta, segundaFruta, ...restante] = todasFrutas

console.log('Primeira Fruta: ', primeiraFruta)
console.log('Segunda Fruta: ', segundaFruta)
console.log('Restante: ', restante)