//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const metro = Number(input('Informe um valor em metros: '))
    
    //processamento
    const quilometro = metro / 1000
    const metro_output = (Math.trunc(quilometro) - quilometro) * 100

    //saida
    print(`O valor em km e m é: ${Math.trunc(quilometro)}km e ${Math.trunc(metro_output)}m`)

}
main()
