//Leia e escreva 3(três) números, verifique e escreva o maior entre os números lidos.
import {input, print} from '../../io_utils.js'

function verificar_maior(numero1, numero2, numero3){
    let resultado = 0
    if(numero1 > numero2 && numero1 > numero3){
        resultado = numero1
    }
    else if(numero2 > numero1 && numero2 > numero3){
        resultado = numero2
    }
    else if(numero3 > numero1 && numero3 > numero2){
        resultado = numero3
    }
    else if(numero1 === numero2 && numero2 === numero3){
        resultado = 'são todos iguais'
    }
    return resultado
}

function main(){
    const numero1 = Number(input('Digite um número: '))
    const numero2 = Number(input('Digite outro número: '))
    const numero3 = Number(input('Digite outro número: '))

    const verificar = verificar_maior(numero1, numero2, numero3)

    console.log(`O maior número é: ${verificar}`)

}
main()