function teste() {
    console.log('Este é meu teste.');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
// Instância.Mêtodo();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

// Método estático é chamado dessa maneira
// Não temos acesso aos dados da classe nesse mêtodo
// Basicamnete uma função separada dentro de uma classe
// O this é referente a classe
console.log(ControleRemoto.soma(2, 4));

