
let filme = {
    nome: "Vingadores"
    , ano: 2009
    , diretor: "Henrique"
    , heroiPrincipal: "Homem formiga"
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    console.log(obj);
    for(prop in filme) {
        if (typeof filme[prop] === "string")
            console.log(prop, filme[prop]);
    }
}