// Elevar um numero x a uma potencia y

function calculaPotencia(num, pow) {
    let resultado = 1;
    for (let i = 0; i < pow; i++) {
        resultado *= num;
    }
    return resultado;
}
console.log(calculaPotencia(5, 3));
console.log(calculaPotencia(5, 5));
console.log(calculaPotencia(9, 7));
console.log(calculaPotencia(4, 8));

// CRIAR FUNÇÃO QUE CALCULA O FATORIAL DE UM NÚMERO USANDO RECURSÃO
// FATORIAL: N! MULTIPLICAÇÃO DE N POR SEUS ANTECESSORES MAIORES OU IGUAIS A 1
// EX: 5! = 5 X 4 X 3 X 2 X 1

const fatorial = function f (num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}
console.log(fatorial (5));
console.log(fatorial (10));
console.log(fatorial (9));


// ARROW FUNCTION

// CRIAR UMA FUNÇÃO PARA CALCULAR JUROS COMPOSTOS
// FUNÇÃO DEVE RECCEBER OS VALORES NO FORMATO INTEIRO: VALOR, % DE JUROS, TEMPO
// FORMULA: VALOR * (JUROS ELEVADO A TEMPO)

const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}
console.log(calculaJuros(1000, 5, 2));
console.log(calculaJuros(500, 10, 3));
console.log(calculaJuros(2000, 7, 5));