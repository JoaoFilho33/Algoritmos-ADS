//Leia 2 (dois) números, verifique e escreva o maior e o menor entre os números lidos

import {input, print} from '../../io_utils.js'

function maior_numero(numero1, numero2){
    let resultado1 = 0
    if(numero1 > numero2){
        resultado1 = numero1
    }
    else if(numero1 < numero2){
        resultado1 = numero2
    }
    return resultado1
}

function menor_numero(numero1, numero2){
    let resultado2 = 0
    if(numero1 < numero2){
        resultado2 = numero1
    }
    else if(numero1 > numero2){
        resultado2 = numero2
    }
    return resultado2
}

function main(){
    //entrada
    const numero1 = Number(input('Digite um número: '))
    const numero2 = Number(input('Digite outro número: '))

    //processamento FUNÇÕES
    const verificar_maior = maior_numero(numero1, numero2)
    const verificar_menor = menor_numero(numero1, numero2)
    
    //saida
    console.log(`O maior número é ${verificar_maior} e o menor é ${verificar_menor}`)

}
main()
