const nome = 'Luis';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Henrique';
    falaNome();
}
usaFalaNome();

// Escopo léxico