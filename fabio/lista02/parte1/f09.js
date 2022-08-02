//Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
import {input} from '../../io_utils.js'
function teste_primo(numero){
    let resultado = 'não é primo'
    
        if(numero === 2 || numero === 3 || numero === 5 || numero === 7 ){
            resultado = 'é primo'
        }
        if(numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0){
            
            resultado = 'é primo'
        }
    return resultado

}

function main(){
    const numero = Number(input('Digite um número: '))

    const verificar = teste_primo(numero)

    console.log(`O número ${verificar}`)
}
main()