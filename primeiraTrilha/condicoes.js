const nome = 'Alan'

if (nome){
    console.log('Olá, ', nome)
} else {
    console.log('Ainda não sei o seu nome')
}

const idade = 36

//PODERIA SER ESSAS DUAS OPÇÕES, PORÉM A SEGUNDA O CODÍGO FICA MELHOR PARA ENTENDER E MAIS PRÁTICO

//if(idade != null && idade >= 18){
///  console.log('Maior de idade')
//}else if(idade != null && idade >= 0 && idade < 18){
//    console.log('Menor de idade')
//}

if(idade != null){
    if(idade >= 18){
    console.log('Maior de idade')
}else if(idade >= 0 && idade < 18){
    console.log('Menor de idade')
}
}