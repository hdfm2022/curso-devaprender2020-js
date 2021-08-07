class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
}

const endereco1 = new Endereco('1', '2', '3');
const endereco2 = new Endereco('1', '2', '3');
const endereco3 = new Endereco('1', '2', 'zzzz');
const endereco4 = endereco1;
endereco1.rua = 'r';

console.log('endereco 4', endereco4);

console.log("check 1 2 data", verificaSeSaoIguais(endereco1, endereco2));
console.log("check 1 1 mem", verificaSeSaoIguaisNaMemoria(endereco1, endereco1));
console.log("check 1 2 mem", verificaSeSaoIguaisNaMemoria(endereco1, endereco2));
console.log("check 1 4 mem", verificaSeSaoIguaisNaMemoria(endereco1, endereco4));
console.log("check 1 3 data", verificaSeSaoIguais(endereco1, endereco3));

function verificaSeSaoIguaisNaMemoria(endereco1, endereco2) {
    return (endereco1 === endereco2) 
}

function verificaSeSaoIguais(endereco1, endereco2) {
    for(let data in endereco1) {
        if (endereco1[data] !== endereco2[data]) {
            return false;
        }
    }
    return true;
}