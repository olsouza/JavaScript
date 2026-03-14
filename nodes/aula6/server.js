const express = require('express');
const app = express();

//         Criar   Ler   Atualizr  Apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entrege a página /
// http://meusite.com/rota <- GET -> Entrege a página /rota
// http://meusite.com/sobre <- GET -> Entrege a página /sobre

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        NOME: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});