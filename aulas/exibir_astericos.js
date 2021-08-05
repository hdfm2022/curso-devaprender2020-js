

exibirAstericos(10);

function exibirAstericos(linhas) {
    let texto = '';
    for(let linha = 1; linha <= linhas; linha++) {
        texto += '*';
        console.log(linha, texto);
    }

    
    for(let linha = 1; linha <= linhas; linha++) {
        let texto2 = '';
        for(let i = 0; i < linha; i++) {
            texto2 += "_";
        }
        console.log(linha, texto2);
    }
}