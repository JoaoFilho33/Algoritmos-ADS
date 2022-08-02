//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
import{print, input} from '../io_utils.js'

function main(){
    //entrada
    const base = Number(input('Digite o valor da base: '))
    const altura = Number(input('Digite o valor da altura: '))

    //processamento
    const area = base * altura

    //saida
    print(`A área do retângulo é: ${area}`)



}
main()