// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Henrique';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luis'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(16, 65, 1.80);

(function () {

})();

