import {input} from "./io_utils.js"
function main(){
    let N = Number(input('Informe um valor: '))
    

    let notas100 = Math.trunc(N / 100)
    let resto = N % 100

    let notas50 = Math.trunc(resto / 50)
    let resto1 = resto % 50

    let notas20 = Math.trunc(resto1 / 20)
    let resto2 = resto1 % 20

    let notas10 = Math.trunc(resto2 / 10)
    let resto3 = resto2 % 10

    let notas5 = Math.trunc(resto3 / 5)
    let resto4 = resto3 % 5

    let notas2 = Math.trunc(resto4 / 2)
    let resto5 = resto4 % 2

    let moedas1 = Math.trunc(resto5 /1)
   

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