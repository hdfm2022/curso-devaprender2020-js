const pessoa = {
    nome: "Henrique"
    , idade: 25
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// interação sobre arrays...
const cores = ['Vermelho', 'Azul', 'Amarelo'];

for(let indice in cores) {
    console.log(indice, cores[indice]);
}

//for-of
for (const cor of cores) {
    console.log(cor);
}

// not defined aqui embaixo, tanto indice quanto cor
//for_in_objects.js:23 Uncaught ReferenceError: cor is not defined
//at for_in_objects.js:23
try {
    console.log(indice);
} catch(Er) {
    console.error(Er);
}try {
    console.log(cor);
} catch(Er) {
    console.error(Er);
}