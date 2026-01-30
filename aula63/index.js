// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 16, 22, 27];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

// [50, 80, 2, 4, 8, 16, 22] pares
// [100, 160, 4, 8, 16, 32, 44] dobro

console.log(numerosPares);