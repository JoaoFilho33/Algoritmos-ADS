//Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
//formadas pelos seus dois primeiros e dois últimos dígitos.
//Exemplo: Raiz quadrada(9801) =99 = 98 + O1. O número 9801 é um quadrado perfeito.
//Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.
import {input} from '../../io_utils.js'
function main(){
    const numero = Number(input('Informe um valor: '))
    const num1 = numero % 100
    const num2 = Math.trunc(numero/100)

    if(perfeito(numero, num1, num2)){
        console.log('O valor é um quadrado perfeito')
    }
    else{
        console.log('O valor não é um quadrado perfeito')
    }   

}
main()
function perfeito(numero, num1, num2){
    const raiz = Math.sqrt(numero)
    if(raiz === num1 + num2){
        return true
    }
    else{
        return false
    }
}