// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0

num1 = Number(num1.toFixed(2))

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));


/* outra forma para transformar um número em inteiro
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));
*/

// console.log(num1.toString() + num2); String temporário
// num1 = num1.toString(); String forever
// console.log(num1.toString(2)); Binário
// console.log(num1.toFixed(2)); Arredondamento
// console.log(Number.isInteger(num1)); Se o número é inteiro ou nn
//let temp = num1 * 'olá';
//console.log(Number.isNaN(temp)); Se é um NaN ou não