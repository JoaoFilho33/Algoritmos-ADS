//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import {print, input} from '../io_utils.js'

function main(){
    //entrada
    const horas = Number(input('O tempo em horas é: '))
    //const minutos = Number(input('O valor em minutos é: '))

    //processamento
    const minutos = horas * 60

    //saida
    print(`O valor em minutos é ${minutos}`)

}

main()