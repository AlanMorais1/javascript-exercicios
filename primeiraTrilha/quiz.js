const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem vindo ao quiz de javaScript!')
console.log('Responda com a letra correta: a, b ou c\n')

let acertos = 0

rl.question('1) Qual palavra usamos para criar uma função função?\n(a) define\n(b) function\n(c) create\n>', (resposta1) => {
    if (resposta1 == 'b' || resposta1 == 'B')
        acertos++
    
    

    rl.question('2) Qual dessas é uma estrutura de repetião?\n(a) loopar\n(b) repart\n(c) for\n>', (resposta2) => {
    if (resposta2 == 'c' || resposta2 == 'C')
        acertos++
    
     
        rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n> ', (resposta3) => {
            if (resposta3 == 'b' || resposta3 == 'B')
                acertos++
           
            
           
            if (acertos == 3) {
                console.log('Parabéns, você acertou todas as perguntas!')
            }else if (acertos == 2){
                console.log('muito bom você acertou 2 perguntas!')
            }else if (acertos == 1) {
                console.log('Você acertou 1 pergunta, continue estudando!')
            }else {
                console.log('Poxa, você não acertou nenhuma pergunta, continue estudando!')
            }
             rl.close()
        })    
    })        
 })            
         