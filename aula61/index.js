// Altera o array
// Dobre os números
//               0  1   2   3  4  .....
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 16, 22, 27];
const numurosEmDobro = numeros.map(valor => valor * 2);
// console.log(numurosEmDobro);


// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luis', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    // obj.id = indice -> altera o original
    return newObj; // obj
});

console.log(pessoas);
console.log(comIds);
