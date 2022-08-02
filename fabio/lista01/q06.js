//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
import {print, input} from '../io_utils.js'

function main(){
    //entrada
    const velocidade_kmh = Number(input('Digite um valor em km/h: '))

    //processamento
    const velocidade_ms = velocidade_kmh / 3.6

    //saída
    print(`A velocidade em m/s é: ${velocidade_ms.toFixed(3)}`)


}
main()