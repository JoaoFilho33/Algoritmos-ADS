var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const N = Number(lines[0])
    var real = N * 100
// N*100 / 100
    const notas100 = Math.trunc(real / 10000) 
    const resto = real % 10000

    const notas50 = Math.trunc(resto / 5000)
    const resto1 = resto % 5000

    const notas20 = Math.trunc(resto1 / 2000)
    const resto2 = resto1 % 2000

    const notas10 = Math.trunc(resto2 / 1000)
    const resto3 = resto2 % 1000

    const notas5 = Math.trunc(resto3 / 500)
    const resto4 = resto3 % 500

    const notas2 = Math.trunc(resto4 / 200)
    const resto5 = resto4 % 200

    //moedas

    const moedas1 = Math.trunc(resto5 /100)
    const resto6 = resto5 % 100

    const moedas050 = Math.trunc(resto6 /50)
    const resto7 = resto6 % 50

    const moedas025 = Math.trunc(resto7 /25)
    const resto8 = resto7 %25

    const moedas010 = Math.trunc(resto8 /10)
    const resto9 = resto8 %10

    const moedas005 = Math.trunc(resto9 / 5)
    const resto10 = resto9 %5

    const moedas001 = Math.trunc(resto10)
   

    console.log('NOTAS:')
    console.log(`${notas100} nota(s) de R$ 100.00`)
    console.log(`${notas50} nota(s) de R$ 50.00`)
    console.log(`${notas20} nota(s) de R$ 20.00`)
    console.log(`${notas10} nota(s) de R$ 10.00`)
    console.log(`${notas5} nota(s) de R$ 5.00`)
    console.log(`${notas2} nota(s) de R$ 2.00`)
    console.log('MOEDAS:')
    console.log(`${moedas1} moeda(s) de R$ 1.00`)
    console.log(`${moedas050} moeda(s) de R$ 0.50`)
    console.log(`${moedas025} moeda(s) de R$ 0.25`)
    console.log(`${moedas010} moeda(s) de R$ 0.10`)
    console.log(`${moedas005} moeda(s) de R$ 0.05`)
    console.log(`${moedas001} moeda(s) de R$ 0.01`)
}
main()