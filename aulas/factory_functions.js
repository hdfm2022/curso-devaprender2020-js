// factory
const celular1 = criarCelular("ASUS 2", {vertical: 155, horizontal: 75});
console.log(celular1);
celular1.ligar();

function criarCelular(marca, tamanhoTela) {
    return {
        marca
        , tamanhoTela
        , ligar() {
            console.log("Fazendo ligação ["+(this.marca)+"]");
        }
    }
}