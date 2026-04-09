function saudacao() {
    console.log('W ai, beleza?')
}

// setTimeout(saudacao, 2000); // ms

let contador = 0

const id = setInterval(() => {
    contador++
    console.log('tempo decorrido (em segundos):', contador)
    if (contador == 10) {
        clearInterval(id)
    }
}, 1000); // ms 