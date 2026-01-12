/*
 Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, syboml) - Valores copiados

 Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Luis',
    sobrenome: 'Henrique'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);