const readline = require('readline'); // Corrigido: era readline

const naruto = readline.createInterface({ // Corrigido: era createInterface
    input: process.stdin,
    output: process.stdout
});

console.log('Bem vindo ao quiz de Naruto!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0; // Corrigido: use 'let' para permitir somar valores

naruto.question('1) Qual é o nome do protagonista da série Naruto?\n(a) Sasuke Uchiha\n(b) Naruto Uzumaki\n(c) Sakura Haruno\n>', (resposta1) => {
    if (resposta1.toLowerCase() === 'b') {
        acertos++;
    }

    naruto.question('2) Qual é o nome do vilão principal da série Naruto?\n(a) Orochimaru\n(b) Itachi Uchiha\n(c) Madara Uchiha\n>', (resposta2) => {
        if (resposta2.toLowerCase() === 'c') {
            acertos++;
        }

        naruto.question('3) Qual é o nome do clã de Naruto?\n(a) Uchiha\n(b) Hyuga\n(c) Uzumaki\n> ', (resposta3) => {
            if (resposta3.toLowerCase() === 'c') {
                acertos++;
            }

            console.log('\n--- Resultado ---');
            if (acertos === 3) {
                console.log('Parabéns você é fã do Naruto!');
            } else if (acertos === 2) {
                console.log('Muito bom, você conhece sobre Naruto!');
            } else if (acertos === 1) {
                console.log('Você precisa assistir mais Naruto!');
            } else {
                console.log('Você não conhece nada de Naruto!');
            }
            
            naruto.close();
        });
    });
});


// const readline = require('readline')

// const naruto = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Bem vindo ao quiz de Naruto!')
// console.log('Responda com a letra correta: a, b ou c\n')

// let acertos = 0

// naruto.question('1) Qual é o nome do protagonista da série Naruto?\n(a) Sasuke Uchiha\n(b) Naruto Uzumaki\n(c) Sakura Haruno\n>', (resposta1) => {
//     if (resposta1 == 'b' || resposta1 == 'B')
//         acertos++

//     naruto.question('2) Qual é o nome do vilão principal da série Naruto?\n(a) Orochimaru\n(b) Itachi Uchiha\n(c) Madara Uchiha\n>', (resposta2) => {
//         if (resposta2 == 'c' || resposta2 == 'C')
//             acertos++

//             naruto.question('3) Qual é o nome do clã de Naruto?\n(a) Uchiha\n(b) Hyuga\n(c) Uzumaki\n> ', (resposta3) => {
//                 if (resposta3 == 'c' || resposta3 == 'C')
//                     acertos++

//                 if (acertos == 3) {
//                     console.log('Parabéns você é fã do Naruto!') 
//                     }else if (acertos == 2) {
//                         console.log('Muito bom, você conhce sobre Narutos!')
//                     }else if (acertos == 1) {
//                         console.log('Você precisa assistir mais Naruto!')
//                     }else {
//                         console.log('Você não conhece nada de Naruto!')
//                     }
//                     naruto.close();
                    
//         })
//     })
// })
