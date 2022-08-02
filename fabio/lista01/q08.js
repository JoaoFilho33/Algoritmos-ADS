//Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import{print, input} from '../io_utils.js'

function main(){
    //entrada
    let numero1 = Number(input('Escreva dois números quaisquer: '))
    let numero2 = Number(input(': '))

    //processamento
    let resultado1 = numero1 + numero2
    let resultado2 = numero1 - numero2
    const resultado3 = resultado1 / resultado2

    //saida
    print(`O resultado da divisão da soma pela subtração é: ${resultado3}`)
}
main()