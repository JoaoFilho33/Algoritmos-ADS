//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3 ) / 3) (p = 3,14)

import {input, print} from '../io_utils.js'
function main(){
    //entrada
    const raio = Number(input('Digite o valor do raio da circunferância: '))
    const pi = 3.14

    //processamento 
    const volume = (4 * pi * raio**3) / 3

    //saida
    print(`O volume da circunferência é: ${volume.toFixed(2)}`)


}
main()