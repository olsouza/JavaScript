// Valor por referência
// String, Objetos, Funções, Números
// delete nomes[2];
// nomes.push('Maria');
// nomes.unshift('José');
// Metodos usa (), Atributos não
// Índices        0        1          2        3
// const nomes = ['Luis', 'Henrique', 'Souza', 'Maria'];
// const novo = nomes.slice(1, -2);
// console.log(novo);

// const nome = 'Luis Henrique Souza';
// const nomes = nome.split(' ');
// split transforma string em array

const nomes = ['Luis', 'Henrique', 'Souza'];
const nome = nomes.join(' ');
// join transforma array em string
console.log(nome);