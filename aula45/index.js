// arguments que sustenta todos os argumentos enviados

// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4);

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Luis', sobrenome: 'Henrique', idade: 16};
// funcao(obj);

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Luis Henrique', 'Souza', 16]);

const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
     if (operador === '+') acumulador += numero;
     if (operador === '-') acumulador -= numero;
     if (operador === '/') acumulador /= numero;
     if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50);