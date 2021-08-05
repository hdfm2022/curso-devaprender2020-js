testarValoresParesImpares(10);

function testarValoresParesImpares(limite) {
    for(let i=1; i<=limite; i++) {
        console.log(i, i%2 === 0 ? "par" : "impar");
    }
}