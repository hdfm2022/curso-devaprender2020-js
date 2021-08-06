class DivisaoCampeonato {
    constructor() {
        this.ranking = [];
        this.jogos = [];
    }
}

let Serie = [];
Serie[0] = new DivisaoCampeonato();
Serie[1] = new DivisaoCampeonato();
Serie[2] = new DivisaoCampeonato();
Serie[3] = new DivisaoCampeonato();

Serie[0].ranking.push({time:"Grêmio"});

console.table(Serie[0].ranking);