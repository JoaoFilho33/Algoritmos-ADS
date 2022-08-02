//11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
//valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
//possíveis para a variável opção são 1, 2 e 3.
import {input} from '../../io_utils.js'
function main(){
    const opcao = Number(input('Digite a sua opção (possíveis: 1, 2 ou 3): '))
    const num1 = Number(input('Digite um número: '))
    const num2 = Number(input('Digite outro número: '))
    const num3 = Number(input('Digite outro número: '))
    

    const verificar = teste_opcao(num1, num2, num3, opcao)

    console.log(`O valor dado a opção ${opcao} é ${verificar}`)
  
}
function teste_opcao(num1, num2, num3, opcao){
    let resultado = 0
    if(opcao === 1){
        resultado = num1
    }
    else if(opcao === 2){
        resultado = num2
    }
    else if(opcao === 3){
        resultado = num3
    }
    return resultado
}
main()