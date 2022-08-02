//Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o 
//resultado em forma de fração.
import {print, input} from '../io_utils.js'
function main() {
    const numerador1 = Number(input('Digite o numerador: '))
    const denominador1 = Number(input('Digite o denominador: '))
    //
    const numerador2 = Number(input('Digite o numerador: '))
    const denominador2 = Number(input('Digite o denominador: '))

    const soma = (numerador1 / denominador1) + (numerador2 / denominador2)

    print('A soma das frações: ')
    print(`${numerador1} / ${denominador1} + ${numerador2} / ${denominador2} é`)
    print(`${soma}`)
    

}
main()