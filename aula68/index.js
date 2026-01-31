/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread) (copia os valores de um objeto para outro)

// Já vimos
Object.Keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.deifneProperty (define uma propriedade)
*/


// Object.freeze(produto);
// const caneca = Object.assign({}, produto, { material: 'porcelana'});
// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produtos));
// Object.defineProperty(produto, 'nome', {
    //     writable: false,
    //     configurable: false,
    //     value: 'Qualquer outra coisa'.
    // });
    // console.log(Object.getOwnPropertyDescriptors(produto, 'nome'));
    const produto = {nome: 'Produto', preco: 1.8, material: 'Porcelana'};
    for(let [chave, valor] of Object.entries(produto)) {
        console.log(chave, valor);
    }
    console.log(Object.entries(produto));