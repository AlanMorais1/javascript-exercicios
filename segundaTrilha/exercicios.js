// IF/ELSE
// DEFINIR UM FLUXO PARA SOMAR OU MITIPLICAR DOIS NÚMEROS USANDO IF/ELSE

const num1 = 10;
const num2 = 5;
const operacao = 'soma'; // ou 'multiplicacao'

if (operacao === 'soma') {
  console.log(num1 + num2);
} else if (operacao === 'multiplicacao') {
  console.log(num1 * num2);
}else {
    console.log('operação não identificada')    
}

// LOCALIZAR O NÍVEL DE BÔNUS DE ACORDO COM A FAIXA SALARIAL
// EX: $11000 E ACIMA: 3% DE BÔNUS
// EX: $7000 A $10999: 5% DE BÔNUS
// EX: $4000 A $6999: 7% DE BÔNUS
// EX: $3999 A BAIXO: 9% DE BÔNUS

const salario = 2000;

if (salario >= 11000) {
  console.log('Bônus de 3%');
} else if (salario >= 7000 && salario < 11000) {
  console.log('Bônus de 5%');
} else if (salario >= 4000 && salario < 7000) {
  console.log('Bônus de 7%');
} else {
  console.log('Bônus de 9%');
}

//OPERADORES

// VERIFICAR SE O ANO É BISSEXTO
// UM ANO É BISSEXTO QUANDO:
// - É DIVISÍVEL POR 4 E NÃO É DIVISÍVEL POR 100
// - OU É DIVISÍVEL POR 400 E 100

const ano = 2000;
// CONST ANO = 2000
// CONST ANO = 2022
// CONST ANO = 1992

if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log(`${ano} é um ano bissexto.`);
} else {
  console.log(`${ano} não é um ano bissexto.`);
}