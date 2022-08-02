//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import{print, input} from '../io_utils.js'
function main(){
    //entrada
    const fahrenheit = Number(input('Digite um valor em Fahrenheit: '))

    //processamento
    const celsius = (5 * fahrenheit - 160) / 9

    //saida
    print(`A temperatura em graus Celsius é: ${celsius.toFixed(2)}`)

}
main()