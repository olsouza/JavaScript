class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Luis';
const sobrenome = 'Henrique';

module.exports = {
    nome, sobrenome, Pessoa
}; // não funciona com o exports esse metodo

// exports.outraCoisa = 'outra coisa';

// module.exports.nome = 'Luis';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser.';

// const nome = 'Luis';
// const sobrenome = 'Henrique';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.meuNome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';