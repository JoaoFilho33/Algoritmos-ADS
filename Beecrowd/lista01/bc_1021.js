import {input} from "./io_utils.js"
function main(){
    let N = Number(input('Informe um valor: '))
    
    let real = N * 100

    let notas100 = Math.trunc(real / 10000) //*100
    let resto = real % 10000

    let notas50 = Math.trunc(resto / 5000)
    let resto1 = resto % 5000

    let notas20 = Math.trunc(resto1 / 2000)
    let resto2 = resto1 % 2000

    let notas10 = Math.trunc(resto2 / 1000)
    let resto3 = resto2 % 1000

    let notas5 = Math.trunc(resto3 / 500)
    let resto4 = resto3 % 500

    let notas2 = Math.trunc(resto4 / 200)
    let resto5 = resto4 % 200

    //moedas

    let moedas1 = Math.trunc(resto5 /100)
    let resto6 = resto5 % 100

    let moedas050 = Math.trunc(resto6 /50)
    let resto7 = resto6 % 50

    let moedas025 = Math.trunc(resto7 /25)
    let resto8 = resto7 %25

    let moedas010 = Math.trunc(resto8 /10)
    let resto9 = resto8 %10

    let moedas005 = Math.trunc(resto9 / 5)
    let resto10 = resto9 %5

    let moedas001 = resto10
   

    console.log('NOTAS:')
    console.log(`${notas100} nota(s) de R$ 100,00`)
    console.log(`${notas50} nota(s) de R$ 50,00`)
    console.log(`${notas20} nota(s) de R$ 20,00`)
    console.log(`${notas10} nota(s) de R$ 10,00`)
    console.log(`${notas5} nota(s) de R$ 5,00`)
    console.log(`${notas2} nota(s) de R$ 2,00`)
    console.log('MOEDAS')
    console.log(`${moedas1} moeda(s) de R$ 1,00`)
    console.log(`${moedas050} moeda(s) de R$ 0,50`)
    console.log(`${moedas025} moeda(s) de R$ 0,25`)
    console.log(`${moedas010} moeda(s) de R$ 0,10`)
    console.log(`${moedas005} moeda(s) de R$ 0,05`)
    console.log(`${moedas001} moeda(s) de R$ 0,01`)


}
main()