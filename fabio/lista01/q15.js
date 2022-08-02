//Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
import {input, print} from '../io_utils.js'

function main(){
    //entrada
    const base = Number(input('Digite a base do triângulo: '))
    const altura = Number(input('Digite a altura do triângulo: '))

    //processamento
    const area = (base * altura) / 2

    //saida
    print(`A àrea do triângulo é: ${area}`)

}
main()