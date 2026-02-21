const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Luis');
console.log(mod1);
console.log(p1);

// const { meuNome, sobrenome, falaNome} = require('./mod1');
// console.log(meuNome, sobrenome);
// console.log(falaNome());