// Dados Primitivos:
// String, number, undefined, null, boolean, symbol
const nome = 'Luis'; // String
const nome1 = "Luis"; // String
const nome2 = `Luis`; // String
const num1 = 10; // Number
const num2 = 10.52 // Number
let nomeAluno; // undefined => não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo => não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
