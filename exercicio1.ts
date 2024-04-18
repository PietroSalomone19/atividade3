/*
NOME:Pietro Almeida Salomone
exercicio 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.
*/

const teclado = require (`prompt-sync`)();
function verificador(numero): boolean{
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let nUm: number = parseInt(teclado(`Digite o primeiro numero`));
let nPar = verificador(nUm);

    console.log(`o numero digitado é par? ${`nPar`}`);

    if (nPar == true) {
        console.log("true então será Par.");
        } else{
            console.log("False então será Ímpar.");
        }