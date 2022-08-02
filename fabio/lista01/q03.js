//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import {print, input} from '../io_utils.js'

function main(){
    //entrada
    const minutos = Number(input('O valor em minutos é: '))

    //processamento
    const horas = minutos / 60

    //saída
    print(`O valor em horas é ${horas}: `)

}

main()