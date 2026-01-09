const nome = 'Luis Henrique';
const sobrenome = 'Souza';
const idade = 16;
const peso = 60;
const alturaEmM = 1.80;

let indiciMassaCorporal; // peso / altura * altura)
indiciMassaCorporal = peso / (alturaEmM * alturaEmM)

let anoNascimento;
anoNascimento = 2025 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiciMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);