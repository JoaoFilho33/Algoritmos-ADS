//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
import {print, input} from '../io_utils.js'
function main(){
    //entrada
    let meses_input = Number(input('Informe um valor em meses: '))
    
    //processamento
    let anos = Math.trunc(meses_input / 12)
    let meses_output = meses_input - (anos * 12)

    //saida
    print(`São ${anos} anos e ${meses_output} meses`)
}
main()