console.log(true && true);
console.log(true && false);

let idade = 15;
let possuiCarteira = true;
console.log(idade > 18 && possuiCarteira);
idade = 20;
console.log(idade > 18 && possuiCarteira);

console.log("====");

console.log(false || true); // imprime true
console.log(false || "Henrique"); // imprime "Henrique"
console.log(true || "Henrique" ); // imprime true
console.log(false || "Henrique" || "Macedo"); // imprime "Henrique" (1a truthy)

// Falsy
// undefined
// null
// 0
// false
// ''
// NaN

// Truthy

let corPersonalizada = "Vermelha";
const corPadrao = "Azul";
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); // Vermelha

corPersonalizada = "";
corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil); // Azul