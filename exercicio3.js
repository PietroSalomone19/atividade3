/*
NOME:Pietro Almeida Salomone
Exercício 3
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
*/
console.clear();
var teclado = require("prompt-sync")();
function calcularVolumeDaEsfera(raio) {
    var pi = 3.14;
    var volume = (4 / 3) * pi * (raio * raio * raio);
    return volume;
}
var raioEsfera = parseFloat(teclado("Digite o raio da esfera:"));
var volumeEsfera = calcularVolumeDaEsfera(raioEsfera);
console.log("\"O volume da esfera com raio\", raioEsfera, \u00E9: " + volumeEsfera);
