let pontos = 100;
let tipo = pontos > 100 ? "premium" : "comum";
console.log(tipo + "["+pontos+"]");

pontos++;
tipo = pontos > 100 ? "premium" : "comum";
console.log(tipo + "["+pontos+"]");