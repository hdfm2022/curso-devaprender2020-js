const celular = {
    marca: 'asus'
    , ligar: function() {
        console.log('ligar');
    }
}

console.log(0, celular);
const novoCelular1 = Object.assign({}, celular);
const novoCelular2 = Object.assign({bateria: 5000}, celular);
console.log(1, novoCelular1);
console.log(2, novoCelular2);

const novoCelular3 = {...celular};
console.log(3, novoCelular3);

celular.marca = 'errei';
console.log("alterei marca do primeiro");
console.log(0, celular);
console.log(3, novoCelular3);