// Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Luis');
const funcao2 = retornaFuncao('Henrique');
console.log(funcao(), funcao2());
