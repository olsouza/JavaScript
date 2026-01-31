// defineProperty -> único - defineProperties -> vários
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor
        configurable: false // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // valor
            writable: true, // pode alterar o valor
            configurable: true // configuravel
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // valor
            writable: true, // pode alterar o valor
            configurable: true // configuravel
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}