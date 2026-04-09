//function saudacao(nome){ // nome é um parâmetro
//    console.log('Olá,', nome)
//}

//MESMA FUNÇÃO ACIMA, MAS COM ARROW FUNCTION

//const saudacao = (nome) => {
//    console.log('Vida longa e próspera,', nome)
//}
//   OUTRA FORMA DE ESCREVER EM 1 LINHA

const saudacao = nome => console.log('Vida longa e próspera,', nome)

saudacao('Alan') // Alan é um argumento
saudacao('Nayara')
saudacao('Heloisa')



//function calcularDobroDeum(numero){
//    return numero * 2
//}

//MESMA FUNÇÃO ACIMA, MAS COM ARROW FUNCTION

//const calcularDobroDeum = (numero) => {
//    return numero * 2
//}

// OUTRA FORMA DE ESCREVER EM 1 LINHA

const calcularDobroDeum = numero => numero * 2  // nesta caso não precisa usar o return nem as chaves {}

const numeroDobrado = calcularDobroDeum(4)
console.log('O dobro de 4 é:', numeroDobrado)


console.log('oi', 'tudo', 'bem', '?')