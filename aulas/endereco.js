class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
}

function exibirEndereco(endereco) {
    for(let data in endereco) {
        console.log(data, endereco[data]);
    }
}

let end = new Endereco("Abram Goldszstein", "POA", "91500-500");
exibirEndereco(end);