/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
FALSY
false
 0
'' "" ``
null / undefined
NaN
*/
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || 'Joaozin' || c || d || e);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);