const numeros = [1,2,3,4,5];

//for-of
console.warn("for-of");
for(numero of numeros) {
    console.log(numero);
}

//for-in
console.warn("for-in");
for(index in numeros) {
    console.log(index, "=>", numeros[index]);
}

//forEach
console.warn("forEach");
numeros.forEach(function(numero, indice) {
    console.log(indice, "=>", numero);
})