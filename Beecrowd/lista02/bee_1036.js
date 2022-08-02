//Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
//Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”,
//caso haja uma divisão por 0 ou raiz de numero negativo.
import {input} from './io_utils.js'
function main(){
    const valores = input('Digite 3 valores: ')
    const [A, B, C] = valores.split(' ').map(Number)

    const delta = B**2 - 4*A*C
    const raiz1 = (-B + Math.sqrt(delta)) / (2*A)
    const raiz2 = (-B - Math.sqrt(delta)) / (2*A)
    
    if(A === 0){
        console.log('Impossível calcular')
    }
    else if(delta < 0){
        console.log('Impossível calcular')
    }
    else{
        console.log(`R1 = ${raiz1.toFixed(5)}`)
        console.log(`R2 = ${raiz2.toFixed(5)}`)
    }
}
main()
