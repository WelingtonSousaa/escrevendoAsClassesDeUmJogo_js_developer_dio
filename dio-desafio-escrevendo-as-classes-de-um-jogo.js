const readline = require('readline');

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
    rl.question('Escolha o tipo do herói:\n1 - Mago\n2 - Guerreiro\n3 - Monge\n4 - Ninja\n', (escolhaTipo) => {
        let tipoHeroi;
        switch (parseInt(escolhaTipo)) {
            case 1:
                tipoHeroi = 'mago';
                break;
            case 2:
                tipoHeroi = 'guerreiro';
                break;
            case 3:
                tipoHeroi = 'monge';
                break;
            case 4:
                tipoHeroi = 'ninja';
                break;
            default:
                tipoHeroi = 'desconhecido';
                break;
        }

        rl.question('Digite a idade do herói: ', (idadeHeroi) => {
            const heroi = new Heroi(nomeHeroi, parseInt(idadeHeroi), tipoHeroi);
            heroi.atacar();
            rl.close();
        });
    });
});
