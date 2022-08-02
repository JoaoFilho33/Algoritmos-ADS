//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

import {input, print} from '../io_utils.js'
function main(){
    //entrada
    let numero = Number(input('Digite um número de 3 dígitos: '))
    
    //processamento
    let i = 0
    let soma = 0
    while(i<3){
    
        soma += numero % 10
        numero = Math.trunc(numero/10)
        i++
    }

    //saída
    print(`A soma dos dígitos é: ${soma} `)
}
main()