let nome = 'Henrique 15'; // string literal
let idade = 15;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionada = null;

console.log("typeof nome: " + typeof nome);
console.log(nome);
console.log("typeof idade: " + typeof idade);
console.log(idade);
idade = 15.05;
console.log("typeof idade: " + typeof idade);
console.log(idade);
console.log("typeof estaAprovado: " + typeof estaAprovado);
console.log(estaAprovado);
console.log("typeof sobrenome: " + typeof sobrenome);
console.log(sobrenome);
console.log("typeof corSelecionada: " + typeof corSelecionada);
console.log(corSelecionada);

// undefined : typeof instance === "undefined"
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"