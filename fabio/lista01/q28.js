//Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
//corresponde.
import {print, input} from '../io_utils.js'
function main(){
   
    //entrada
    let horas_input = Number(input('Informe um valor em horas: '))
    
    //processamento
    let semanas = Math.trunc(horas_input / 168)
    let dias = Math.trunc(horas_input / 24)
    let horas_output = horas_input - (dias * 24)
    
 
    //saida
    print(`São ${semanas} semanas, ${dias} dias, e ${horas_output} horas`)
}
main()