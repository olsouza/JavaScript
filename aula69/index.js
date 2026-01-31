/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da oportunidade prototype da função construtora que foi usada para criá-la. Quando tentamos acessar um membro no próprio objeto, primeiro o motot do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('Luis', 'H.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.log(pessoa1.nomeCompleto());
// console.log(data);

// pessoa1 --> Pessoa.prototype --> Object.prototype