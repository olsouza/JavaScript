// Declaração de função (Function hoisting) - Não faz diferença chamar a função antes de declarar ela
falaOi();
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Função será executada abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...')
    }
};
obj.falar();