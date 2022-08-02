//Leia um valor em m, calcule e escreva o equivalente em cm.

import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const metro = Number(input('Informe um valor em metros: '))

    //processamento
    const centimetro = metro * 100

    //saida
    print(`O valor em centimetros: ${centimetro}`)

}
main()