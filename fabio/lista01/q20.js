//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const celsius = Number(input('Digite uma temperatura em graus Celsius: '))

    //processamento
    const fahrenheit = (9 * celsius + 160) / 5

    //saida
    print(`A temperatura em Fahrenheit é: ${fahrenheit}`)


}
main()