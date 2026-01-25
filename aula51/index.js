// Factory function (Função fábrica)
// Constructor function (FUnção construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luis', 'Henrique', 1.8, 65);
const p2 = criaPessoa('Junior', 'Henrique', 2.0, 95);
const p3 = criaPessoa('Luke', 'Henrique', 1.8, 40);
console.log(p3.imc);
console.log(p2.imc);
console.log(p1.imc);
// p1.nomeCompleto = 'Luke Souza Ferrari';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());
