//Leia 1 (um) numero de 2 dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.
import {input, print} from '../../io_utils.js'

function dezena_unidade(numero){
    let resultado = 'diferente'
    if (numero[1] === numero[0]){
        resultado = 'igual'
    }
    else if(numero[1] > numero[0]){
        
    }
    return resultado
}
function main(){
    const numero = input('Digite um número de 2 dígitos: ').split('').map(Number)

    const verificar = dezena_unidade(numero)

    console.log(`O algarismo da dezena é ${verificar} em relação a unidade. `)
}
main()