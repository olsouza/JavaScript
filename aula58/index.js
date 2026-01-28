//              -5      -4          -3       -2       -1 
//               0       1           2        3        4
const nomes = ['Luis', 'Henrique', 'Souza', 'José', 'Maria'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// const removidos = nomes.splice(3, 2, 'João', 'Otávio');

// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranha')

// unshift
nomes.splice(0, 0, 'Luiz', 'Otávio', 'Miranha')
console.log(nomes);