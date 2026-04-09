 //const readline = require('readline')

 import { createInterface } from 'readline'
 import { soma, subtracao, multiplicacao, divisao, potencia, restoDaDivisao, raizQuadrada } from './operacoesMatematicas.js' // import { soma, subtracao }

 const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
 })

 leitor.question('Digite o primeiro numero:\n> ', (numero1) => {


    leitor.question('Digite a operação:\n+: soma\n-: subtração\n*: multiplicação\n/: divisao\n**: potência\n%: resto da divisão\nraiz: raiz quadrada\n> ', (operacao) => {


                // Se for raiz, NÃO pede o segundo número
        if (operacao === 'raiz') {
            const resultado = raizQuadrada(Number(numero1))
            console.log('Resultado:', resultado)
            leitor.close()
        } else {

        leitor.question('Digite o segundo numero:\n> ', (numero2) => {

            const num1 = Number(numero1)
            const num2 = Number(numero2)

            let resultado = null

            if (operacao == '+') {
                resultado = soma(num1, num2)
            } else if (operacao == '-') {
                resultado = subtracao(num1, num2)

            } else if (operacao == '*') {
                resultado = multiplicacao(num1, num2)

            } else if (operacao == '/') {
                resultado = divisao(num1, num2)   
                
            }else if (operacao == '**') {
                resultado = potencia(num1, num2) 
                
            }else if (operacao == '%') {
                resultado = restoDaDivisao(num1, num2)   
                
            }else if (operacao == 'raiz') {
                resultado = raizQuadrada(num1, num2)       

            } else {
                console.log('Operação inválida!')
            }

            if (resultado != null) {
                console.log('O resultado é: ', resultado)
            }
        
             
        leitor.close()
    })

}
    
    })

})
