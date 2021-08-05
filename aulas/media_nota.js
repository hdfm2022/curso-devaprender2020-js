

function mediaGeral(valores) {
    let soma = 0;
    for(let valor of valores) {
        soma += valor;
    }
    return soma / (valores.length);
}

function mediaAluno(notas) {
    const media = mediaGeral(notas);
    console.log("media", media);
    if (media >= 90) {
        return "A";
    } else if (media >= 80) {
        return "B";
    } else if (media >= 70) {
        return "C";
    } else if (media >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let notas = [90,89,90];
console.log(mediaAluno(notas));