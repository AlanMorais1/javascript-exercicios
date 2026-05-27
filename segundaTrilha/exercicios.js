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

// OPERADOR TERNÁRIO / OPERADOR CONDICIONAL

const nome = 'Fernando'
const saudacao = nome ? `Olá, ${nome}` : 'Olá, pessoa';
// nome ? saudar(nome) : saudar ('pessoa')


//const nome = 'Fernando';
//let saudacao;

//if (nome) {
//  saudacao = `Olá, ${nome}`;
//} else {
//  saudacao = 'Olá, pessoa';
//}


// SWITCH CASE

const avaliacao = 2;
switch (avaliacao) {
  case 5:
    console.log('Excelente');
    break;
    case 4:
    console.log('Bom');
    break;
    case 3:
    console.log('Regular');
    break;  
  default:
    console.log('Avaliação baixa');
}

//OP CONDICIONAL E SWITCH
// VERIFICAR SE ESTUDANTE VAI RECEBER BÔNUS
// ESTUDANTES RECEBEM BÔNUS SE TIVEREM NOTA 8 OU ACIMA E SE TIVEREM NO MAXIMO 2 FALTAS

const nome1 = "Roberta"
const nota = 8
const faltas = 2

const recebeBonus = (nota >= 8) && (faltas <= 2) 
? `${nome1} recebe bônus` 
: `${nome1} não recebe bônus`;

console.log(recebeBonus);

// criar um fluco que indefica o tipo de usuario e comunica de acordo
//ex: usuario free tem acesso limitado ao app
//    usuario premium tem acesso a todas a funções
//    usuario super premium tem acesso total e bonus especiais

const user = 'supr premium';

switch (user) {
  case 'free' :
    console.log('Você tem acesso limitado ao app.');
    break;
  case 'premium' :
    console.log('Você tem acesso a todas as funções.');
    break;
  case 'super premium' :
    console.log('Você tem acesso total e bônus especiais.');
    break;
  default:
    console.log('Tipo de usuário não identificado.');
    break;
}

// exercicio

const idade = 20

if (idade >= 18) {
    console.log('Acesso permitido');
}else {
    console.log('Acesso negado');
}

// switch case

const idade1 = 16

switch (true) {
    case (idade1 >= 18):
        console.log('Acesso permitido');
        break;
    default:
        console.log('Acesso negado');
        break;
}

// exercicio: cê está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. 
// Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:
// Menor que 15: Frio
// de 15 a 25: Agradável
// Maior que 25: Quente

const temperatura = 22;

if (temperatura < 15) {
    console.log('O dia está frio.');
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log('O dia está agradável.');
} else {
    console.log('O dia está quente.');
}

// switch case

const temperatura1 = 30;

switch (true) {
    case (temperatura1 < 15):
        console.log('O dia está frio.');
        break;
    case (temperatura1 >= 15 && temperatura1 <= 25):
        console.log('O dia está agradável.');
        break;
    default:
        console.log('O dia está quente.');
        break;
}

// Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:
//Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
//Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
//Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".
//Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.


const idade2 = 12

if (idade2 < 12) {
  console.log('Infantil');  
} else if (idade2 < 18) {
  console.log('Juvenil');
}else {
  console.log('Adulto');
}

// Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. 
// Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

//Crie um programa que, dado o dia da semana em formato numérico:

// 0: Domingo
// 1: Segunda-feira
// 2: Terça-feira
// 3: Quarta-feira
// 4: Quinta-feira
// 5: Sexta-feira
// 6: Sábado

const diaSemana = 6;

if (diaSemana >= 1 && diaSemana <= 5) {
  console.log('A loja está aberta das 9h às 18h.');
} else if (diaSemana === 0 || diaSemana === 6) {
  console.log('A loja está aberta das 10h às 14h.');
}

//Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". 
// Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."

const usuario = 'admin'

if (usuario === 'admin') {
  console.log('Login bem-sucedido');  
}else {
  console.log('Usuário Inválido');  
}

// Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo de preparo de sucos. 
// O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo esperado, de acordo com uma receita.

// O suco pode ser feito somente com "laranja" ou "abacaxi".
// Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.

const fruta = "laranja"

if (fruta == 'laranja' || fruta == 'abacaxi'){
  console.log('Fruta compatível');
}else {
    console.log('Não compatível');    
} 


//Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

// Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". 
// Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."

const carrinhoVazio = false

if (!carrinhoVazio) {
  console.log('Compra finalizada com sucesso!');  
}else {
  console.log('Não é possível finalizar a compra: carrinho vazio.');  
}


//Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

// Se o status for "pendente", exibe: "Pagamento pendente".
// Se o status for "aprovado", exibe: "Pagamento aprovado".
// Se o status for "recusado", exibe: "Pagamento recusado".
// Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.


const statusPagamento = 'aprovado';

switch (statusPagamento) {
  case 'pendente':
    console.log('Pagamento pendente');
    break;
  case 'aprovado':
    console.log('Pagamento aprovado');
    break;
  case 'recusado':
    console.log('Pagamento recusado');
    break;
  default:
    console.log('Status de pagamento inválido');
}

//Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

//O personagem precisa ter mais de 50 pontos.
//O personagem deve ter pelo menos uma vida restante.
//Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.

const pontos = 60
const vidas = 1

if (pontos > 50 && vidas >= 1) {
  console.log('Personagem pode avançar para o próximo nível');
} else {
  console.log('Personagem não pode avançar para o próximo nível');
}

//Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

//"Crítica": se a bateria estiver abaixo de 20%
//"Moderada": se estiver entre 20% e 80%
//"Cheia": se estiver acima de 80%
//Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.

const bateria = 65;

const statusBateria = (bateria < 20) ? 'Crítica' : (bateria <= 80) ? 'Moderada' : 'Cheia';
console.log(`A bateria está em estado: ${statusBateria}`);

