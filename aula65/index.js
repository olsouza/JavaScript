// Factory functions / Constructor function / Classes
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luis', 'Henrique');
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); -> travou o objeto e não pode mais alterar em baixo disso
    // return this;
}

// {} <- this -> this
// p1 = {ENDERECOMEMORIA} -> 'Valor'
// p1.ENDERCOMEMORIA = {nome: 'Outra coisa'} -> PODE
// p1 = {NOVOENDERECOMEMORIA} -> NÃO PODE
const p1 = new Pessoa('Luis', 'Henrique');
// Object.freeze(p1); -> travou o objeto
p1.nome = 'Outra coisa';
console.log(p1);