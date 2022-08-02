//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso

import {print, input} from '../io_utils.js'
function main(){
    const numero = Number(input('Informe um número de 3 digitos: '))

    //processamento
    const centenas = Math.trunc(numero / 100)
    const centenas_resto = numero % 100
    const dezenas = Math.trunc(centenas_resto / 10)
    const unidades = centenas_resto % 10


    //saida
    const inverso = (unidades * 100) + (dezenas * 10) + (centenas)

    const soma = numero - inverso

    print(`São ${centenas} centena(s), ${dezenas} dezena(s), ${unidades} unidade(s).`)
    print(`A diferença entre ${numero} - ${inverso}: ${soma}`)
}
main()