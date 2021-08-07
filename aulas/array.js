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


