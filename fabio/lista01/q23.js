//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const massa_quilograma = Number(input('Informe um valor em quilograma: '))

    //processamento
    const massa_grama = massa_quilograma * 1000

    //saida
    print(`O valor em gramas é: ${massa_grama}`)

}
main()