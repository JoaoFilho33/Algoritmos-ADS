var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const N = Number(lines[0])
    

    var notas100 = Math.trunc(N / 100)
    var resto = N % 100

    var notas50 = Math.trunc(resto / 50)
    var resto1 = resto % 50

    var notas20 = Math.trunc(resto1 / 20)
    var resto2 = resto1 % 20

    var notas10 = Math.trunc(resto2 / 10)
    var resto3 = resto2 % 10

    var notas5 = Math.trunc(resto3 / 5)
    var resto4 = resto3 % 5

    var notas2 = Math.trunc(resto4 / 2)
    var resto5 = resto4 % 2

    var moedas1 = Math.trunc(resto5 /1)
   

    console.log(`${N}`)
    console.log(`${notas100} nota(s) de R$ 100,00`)
    console.log(`${notas50} nota(s) de R$ 50,00`)
    console.log(`${notas20} nota(s) de R$ 20,00`)
    console.log(`${notas10} nota(s) de R$ 10,00`)
    console.log(`${notas5} nota(s) de R$ 5,00`)
    console.log(`${notas2} nota(s) de R$ 2,00`)
    console.log(`${moedas1} nota(s) de R$ 1,00`)

}
main()