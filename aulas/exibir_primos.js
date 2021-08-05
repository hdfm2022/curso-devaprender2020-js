
exibirNumerosPrimos(200);

function exibirNumerosPrimos(limite) {
    let arrayPrimos = [];
    for(let i=2; i<=limite; i++) {
        //console.log('teste se', i, 'é primo');
        isPrimo = true;
        for(let z=2; z<i; z++) {
            //console.log("div por ", z , "?");
            if (i % z == 0) {
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
            arrayPrimos.push(i);
        }
    }
    console.log("Primos", arrayPrimos);
}