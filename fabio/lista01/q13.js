//Leia um valor em real (R$), calcule e escreva 70% deste valor.

import{input, print} from '../io_utils.js'

function main(){
    //entrada
    const real = Number(input('Digite um valor em real (R$): '))

    //processamento
    const real70 = real * 0.7

    //saida
    print(`70% do valor digitado é: ${real70.toFixed(2)}`)

}
main()