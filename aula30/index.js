const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 16,
    endereco: {
       // rua: 'Av Brasil',
        numero: 260
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);