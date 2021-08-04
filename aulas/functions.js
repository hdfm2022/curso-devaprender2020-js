// Verbo + substantivo

function resetaCor(cor, tonalidade) {
    corSite = cor + " " + tonalidade;
}

let corSite = "azul";
console.log(corSite);
resetaCor("vermelho", "escuro");
console.log(corSite);

function dizerNome() {
    console.log("Henrique");
}

dizerNome();

function multiplicarPorDois(valor) {
    return valor * 2;
}

let resultado = multiplicarPorDois(5);
console.log(resultado);