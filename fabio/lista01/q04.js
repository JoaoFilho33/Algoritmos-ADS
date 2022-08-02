//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

import {print, input} from '../io_utils.js'
function main() {
    //entrada
    const cotacao_atual = Number(input('A cotação atual do dólar é: '))
    const seuvalor_dolar = Number(input('O valor para conversão é: '))

    //processamento
    const valor_real = seuvalor_dolar * cotacao_atual

    //saída
    print(`O valor em real é R$ ${valor_real.toFixed(2)}`)
}

main()