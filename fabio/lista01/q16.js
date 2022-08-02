//Leia o valor do lado de um quadrado, calcule e escreva sua área.(área = lado2)
import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const ladoQuadrado = Number(input('Atribua um valor para o lado do quadrado: '))

    //processamento
    const area = ladoQuadrado**2

    //saida
    print(`A área do quadrado é: ${area}`)


}
main()