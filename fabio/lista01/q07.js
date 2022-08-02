//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import{print, input} from '../io_utils.js'

function main(){
    //entrada
    let numero1 = Number(input('Digite três números quaisquer: '))
    let numero2 = Number(input(': '))
    let numero3 = Number(input(': '))

    //processamento
   
      const  soma1 = numero1 + numero2 

      const soma2 = numero2 + numero3
    //saída
    print(`A soma entre os dois primeiros números é: ${soma1}`)
    print(`E a soma entre os dois últimos números é: ${soma2} `)

    //}

}
main()