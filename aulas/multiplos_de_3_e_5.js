

somarMultiplosAte([3,5], 20);

function somarMultiplosAte(multiplosDe, somarAte) {
    let soma = 0;
    for(let i=1; i<=somarAte; i++) {
        for(teste of multiplosDe) {
            if (i % teste === 0) {
                console.log(i, "multiplo de " + teste);
                soma += i;
                break;
            }
        }
    }
    console.log("soma", soma);
    return soma;
}