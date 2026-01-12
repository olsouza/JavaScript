const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 16,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    idadeAtual() {
        console.log(`A minha idade atual é ${this.idade} anos`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.idadeAtual();
pessoa1.incrementaIdade();
pessoa1.idadeAtual();
pessoa1.incrementaIdade();
pessoa1.idadeAtual();


// function criaPessoa (nome, sobrenome, idade) {
//     return  { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Luis', 'Henrique', 16);
// const pessoa2 = criaPessoa('Lucas', 'Souza', 14);
// const pessoa3 = criaPessoa('Karla', 'Maria', 41);
// const pessoa4 = criaPessoa('José', 'Leonardo', 40);
// const pessoa5 = criaPessoa('Luke', 'Dog', 60);

// console.log(pessoa4.nome, pessoa2.sobrenome, pessoa5.idade);
