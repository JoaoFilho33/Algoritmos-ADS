//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import {print, input} from '../io_utils.js'

function main(){
    //entrada
    const salario1 = Number(input('Digite o seu salário atual: '))

    //processamento
    const salario2 = salario1 + (salario1 * 0.25)

    //saída
    print(`25% de aumento no salário resulta em: ${salario2}`)
}
main()