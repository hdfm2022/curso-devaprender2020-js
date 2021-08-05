const mouse = {
    cor: 'red'
    , marca: 'dazz'
}

console.log(mouse);
mouse.velocidade = 5000;
console.log(mouse);
mouse.trocarDPI = function () {
    console.log('mudando dpi"');
}
console.log(mouse);
delete mouse.velocidade;
console.log(mouse);
delete mouse.trocarDPI;
console.log(mouse);