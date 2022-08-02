//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
//corresponde.
import {print, input} from '../io_utils.js'
function main(){
    //entrada
    let minutos_input = Number(input('Informe um valor em minutos: '))
    
    //processamento
    
        let dias = Math.trunc(minutos_input / 1440)
        let horas = Math.trunc(minutos_input / 60)
        let minutos_output = minutos_input - (horas * 60)

    //saida
    print(`São ${dias} dias, ${horas} horas, ${minutos_output} minutos`)
    

}
main()