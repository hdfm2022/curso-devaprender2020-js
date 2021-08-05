// div por 3 => Fizz
// div por 5 => Buzz
// div por 3 e 5 => FizzBuzz
// não divisivel => próprio valor

function fizzBuzz(valor) {
    if (typeof valor !== "number") 
        return "Não é um número";

    var str = "";
    if (valor % 3 === 0) str += "Fizz";
    if (valor % 5 === 0) str += "Buzz";
    return (str === "" ? valor : str);
}

for (let i = 1; i <= 50; i++) {
    console.log(fizzBuzz(i));
}
console.log(fizzBuzz("asd"));
console.log(fizzBuzz(true));
console.log(fizzBuzz(null));
console.log(fizzBuzz());