 let contador = 1

 while(contador <= 10) {
    console.log('numero atual:', contador)
    contador++
 }

let numero = 1

 do {
    console.log('numero atual:', numero)
    numero++
 } while (numero <= 10)

    // são as outras duas formas de repetição
    // o que muda é que o while verifica se é verdadeira a condição para rodar
    // o Do roda pelo menos 1 vez para depois verificar


//for(let numero = 0; numero <=20; numero++){
//    if(numero % 2 > 0){
//        console.log('Numero impar encontrado:', numero)
//    }        
//}

let numeroUm = 0

while(numeroUm <= 20){
    if (numeroUm % 2 > 0)
    console.log('Numero Impar:', numeroUm)
    numeroUm++
}   

let numeroPar = 0

while(numeroPar <= 20){
    if (numeroPar % 2 === 0){
    console.log('Numero par:', numeroPar)
    }
    numeroPar++
}   

let n = 2

 do {
     if(n % 2 === 0){
    
    console.log('numero 1:', n)
     }
    n++

 } while (n <= 20)

let a = 0

 do {
     if(a % 2 !== 0){
    
    console.log('numero 2:', a)
     }
    a++

 } while (a <= 20)