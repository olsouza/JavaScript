class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // mesma coisa de criar um prototype, só que mais simples
        console.log(`${this.nome} ésta falando.`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} ésta falando.`);
}

const p1 = new Pessoa('Luis', 'Henrique');
const p2 = new Pessoa2('Luiz', 'Henrique');

console.log(p1);
console.log(p2);