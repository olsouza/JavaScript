// em JSON as chaves e valores em string tem aspas duplas => ""

// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));


// Tem que usar pra usar axios
//  <script src="https://unpkg.com/axios@1.13.2/dist/axios.min.js"></script>
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

    function carregaElementosNaPagina(json) {
        const table = document.createElement('table');
        for(let pessoa of json) {
            const tr = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.innerHTML = pessoa.nome;
            tr.appendChild(td1);

            let td2 = document.createElement('td');
            td2.innerHTML = pessoa.idade;
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            td3.innerHTML = pessoa.estado;
            tr.appendChild(td3);

            table.appendChild(tr);
            
        }

        const resultado = document.querySelector('.resultado');
        resultado.appendChild(table);
    }
