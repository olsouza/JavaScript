// export const nome = 'Luis';
export const nome = 'Luis';
export const sobrenome = 'Henrique';
export const idade = 16;

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export default (x, y) => x * y;

// export { nome, sobrenome, idade, soma};

// export { nome, sobrenome, idade, soma as default};
// DEFAULT É O PADRÃO -> SÓ PODE TER UM DEFAULT

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// export { nome as nome2, sobrenome, idade, soma };