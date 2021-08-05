// max até 70
// a cada 5km acima, ganha 1 ponto
// math.floor
// caso 12+ pontos, carteira suspendida

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima) {
        return "ok";
    } else {
        const pontos = Math.floor((velocidade-velocidadeMaxima)/kmPorPonto);
        if (pontos >= 12) {
            return "Carteira suspendida! " + pontos + " pontos";
        } else {
            return pontos + " pontos";
        }
    }


}

console.log(verificarVelocidade(50));
console.log(verificarVelocidade(71));
console.log(verificarVelocidade(76));
console.log(verificarVelocidade(81));
console.log(verificarVelocidade(129));
console.log(verificarVelocidade(130));
console.log(verificarVelocidade(150));