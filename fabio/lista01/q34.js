//Leia 3 números, calcule e escreva a média dos números.
import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const numero1 = Number(input('Informe três número: '))
    const numero2 = Number(input(': '))
    const numero3 = Number(input(': '))

    //processamento
    const media = (numero1 + numero2 + numero3) / 3

    //saida
    print(`A média dos 3 números é: ${media}`)

}
main()