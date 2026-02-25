const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
};

// flag: 'w' apaga e reescreve
// flag: 'a' continua escrevendo