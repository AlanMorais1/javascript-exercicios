// 1. Destructuring em objetos 
//Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.

const usuario = { 

nome: "Lucas", 

idade: 28, 

email: "lucas@email.com" 

}; 

const { nome, idade, email } = usuario; 

console.log(nome, idade, email); 

 

// 2. Destructuring em arrays 
//Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

const linguagens = ["JavaScript", "Python", "Ruby"]; 

const [ling1, ling2, ling3] = linguagens; 

console.log(ling1, ling2, ling3); 

 

// 3. Rest operator em função 
//Crie uma função que receba vários números como parâmetros usando o operador rest (...).
//Utilize um laço for para somar todos os valores recebidos e retorne o total.

function somarTudo(...numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

console.log(somarTudo(1, 2, 3, 4)); // 10


 

// 4. Spread operator com arrays 
//Crie dois arrays de frutas e combine-os usando o operador spread.

const frutas1 = ["maçã", "banana"]; 

const frutas2 = ["laranja", "uva"]; 

const todasFrutas = [...frutas1, ...frutas2]; 

console.log(todasFrutas); 

 

// 5. Spread operator com objetos 
//Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const dados1 = { nome: "Joana" }; 

const dados2 = { idade: 32 }; 

const perfil = { ...dados1, ...dados2 }; 

console.log(perfil); 

 

// 6. Função com parâmetro default 
//Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.

function saudacao(nome = "visitante") { 

console.log(`Olá, ${nome}!`); 

} 

saudacao(); // Olá, visitante! 

saudacao("Marcos"); // Olá, Marcos! 

 

// 7. Trabalhando com datas 
//Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const hoje = new Date(); 

const dia = hoje.getDate(); 

const mes = hoje.getMonth() + 1; // mês começa em 0 

const ano = hoje.getFullYear(); 

console.log(`Hoje é ${dia}/${mes}/${ano}`); 

 

// 8. Modularização (CommonJS) 
//Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

Arquivo: somar.js 

module.exports = function somar(a, b) { 

 return a + b; 

 } 

 

Arquivo: app.js 

const somar = require('./somar'); 

console.log(somar(5, 3)); 

 

// Ou usando ES Modules (Node com "type": "module") 

export function somar(a, b) { 

return a + b; 

 } 

 

import { somar } from './somar.js'; 

console.log(somar(5, 3)); 

 

// 9. Classe com construtor 
//Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
//Em seguida, crie dois objetos Livro usando essa função.

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1);
console.log(livro2);


 

// 10. Método no objeto
//Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
  };
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien");
console.log(livro.descrever());