let array = [
    true,
    45,
    "Henrique",
    [1,2,3]
];

array.push("teste");

console.log(array);
console.log(array[2]);
console.log(array.length);

const numeros = [1,2,3];
// numeros = []; // da erro << pq é const
numeros.unshift(0);
numeros.push(4);
numeros.splice(1, 0, 'a');
numeros.push(2);
numeros.push(2);
numeros.push(2);
console.log(numeros);
console.log("indexOf 2", numeros.indexOf(2)); // pos 3
console.log("lastIndexOf 2", numeros.lastIndexOf(2)); // pos 3
console.log("indexOf 7", numeros.indexOf(7)); //-1

console.log("includes 7", numeros.includes(7));
console.log("includes 3", numeros.includes(3));

// referencia

console.clear();

console.log("referencia");
const marcas = [
    {id:1, nome:"A"}
    , {id:2, nome:"D"}
    , {id:3, nome:"C"}
    , {id:4, nome:"D"}
];

console.log("includes?", marcas.includes({id:1, nome:"A"}));
// não acha pq são referencias diferentes...

const result = marcas.find(function(marca) {
    return marca.nome === 'D';
});
console.log(result);

//arrow functions
const result2 = marcas.find((marca) => {
    return marca.nome === 'C';
});
console.log(result2);

const numeros2 = [1,2,3,4,5,6];
console.clear();
console.log(numeros2);

numeros2.pop();
console.log(numeros2, 'after pop');
numeros2.shift();
console.log(numeros2, 'after shift');
console.warn(numeros2.splice(1, 2), 'retirados com splice');
console.log(numeros2, 'after splice 1 2');
// não terminei.
console.error("nao terminei...");

//numeros2 = []; // não pode ser retribuido pq é const
// mesmo com let é ruim pq pq está referenciado em outro lugar

const numeros3 = numeros2;
numeros2.length = 0;
console.log(numeros3);

const numeros4 = [1,2,3,4,5];
numeros4.splice(0, numeros4.length);
console.log(numeros4);