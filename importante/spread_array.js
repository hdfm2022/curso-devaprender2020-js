
console.clear();

const arr1 = [1,2,3];
const arr2 = [5,6,7];

// const combinado = arr1.concat(arr2);
const combinadoSPREAD = [...arr1, 'a', ...arr2, 'b'];
console.log(combinadoSPREAD);

// const cortado = combinado.slice(0,4);
const clonado = [...combinadoSPREAD];
console.log(clonado);