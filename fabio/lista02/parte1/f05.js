//Leia 3 números e escreva-os em ordem crescente
import {input} from '../../io_utils.js'
function ordem_crescente1(numero1, numero2, numero3){
     let resultado = 0
    if(numero1 > numero2 && numero2 > numero3){
        resultado = (`${numero1}, ${numero2} e ${numero3}`)
    }
    else if(numero2 > numero1 && numero1 > numero3){
        resultado = (`${numero2}, ${numero1} e ${numero3}`)
    }
    else if(numero3 > numero1 && numero1 > numero2){
        resultado = (`${numero3}, ${numero1} e ${numero2}`)
    }
    else if(numero1 > numero3 && numero3 > numero2){
        resultado = (`${numero1}, ${numero3} e ${numero2}`)
    }
    else if(numero2 > numero3 && numero3 > numero1){
        resultado = (`${numero2}, ${numero3} e ${numero1}`)
    }
    else if(numero3 > numero2 && numero2 > numero1){
        resultado = (`${numero3}, ${numero2} e ${numero1}`)
    }
        return resultado
}

function main(){
    const numero1 = Number(input('Digite um número: '))
    const numero2 = Number(input('Digite outro número: '))
    const numero3 = Number(input('Digite outro número: '))

    const verificar1 = ordem_crescente1(numero1, numero2, numero3)
    

    console.log(`A ordem crescente dos números é: ${verificar1}`)
}
main()