//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const binario = input('Digite um número binário de 4 digitos: ')

    //processamento
    const digito0 = Number(binario[0])
    const digito1 = Number(binario[1])
    const digito2 = Number(binario[2])
    const digito3 = Number(binario[3])
    
    const decimal = (digito0 * 2**3) + (digito1 * 2**2) + (digito2 * 2**1) + (digito3 * 2**0)
    
    //saida
    print(`O valor em decimal é: ${decimal}`)
}
main()

