// Contar quantos numeros pares e quantos numeros impares nós temos entre 0 e 100

let totalNumerosPares = 0
let totalNumerosImpares = 0

// Laço de repetição

for(let contador = 0; contador <= 100; contador++){
    if(contador % 2 == 0){
        totalNumerosPares++;
    }else {
        totalNumerosImpares++
    }
} 
    console.log('tota de numero pares', totalNumerosPares)
    console.log('total de numero impares', totalNumerosImpares)


// outras fomras, feita por IA

let nPares = 0;
let nImpares = 0;
let contador = 0; // Inicialização do contador

while (contador <= 100) {
  if (contador % 2 === 0) {
    nPares++;
  } else {
    nImpares++;
  }
  contador++; // Incremento do contador
}

console.log('Total de números pares:', nPares);
console.log('Total de números ímpares:', nImpares);

// ou

let totalPares = 0;
let totalImpares = 0;
let contador1 = 0; // Inicialização do contador

do {
  if (contador1 % 2 === 0) {
    totalPares++;
  } else {
    totalImpares++;
  }
  contador1++; // Incremento do contador
} while (contador1 <= 100);

console.log('Total de números pares:', totalPares);
console.log('Total de números ímpares:', totalImpares);