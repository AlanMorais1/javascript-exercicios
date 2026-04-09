const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0
})

console.log('Todos números: ', numeros)
console.log('numeros pares: ', numerosPares)
console.log('numeros impares: ', numerosImpares)


const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})

console.log('nossa lista mapeada', numerosDobrados)