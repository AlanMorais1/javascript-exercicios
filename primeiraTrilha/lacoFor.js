// Estrutura do laço de repetição FOR

for(let contador = 1; contador <= 5; contador++) {
    console.log('Número atual:', contador)
}

for(let numero = 0; numero <=20; numero++){
    if(numero % 2 == 0){
        console.log('Numero par encontrado:', numero)
    }
}

for(let numero = 0; numero <=20; numero++){
    if(numero % 2 > 0){
        console.log('Numero impar encontrado:', numero)
    }        
}

const palavra = 'calopsita'

//palavra.leght indica quantos caracteres uma string possui
// palavra [1] - pega a letra na posição indicada

for(let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador])
}