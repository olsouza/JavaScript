// import { nome, sobrenome, idade, soma, Pessoa as OutraCoisa } from './modulo1'; => ESCOLHA
// import * as MeuModulo from './modulo1'; => GERAL
// (as) troca o nome da variavel
// no export default não usa chaves no import

import Pessoa, { nome, sobrenome} from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);
// console.log(n, sobrenome, idade, soma(4, 4));

// const p1 = new OutraCoisa('Luis', 'Henrique');
// console.log(p1);
