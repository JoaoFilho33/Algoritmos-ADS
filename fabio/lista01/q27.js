//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos 
//segundos ele corresponde. 
import {print, input} from '../io_utils.js'
function main(){   
    //entrada
    let segundos_input = Number(input('Escreva um valor em segundos: '))
    
    //processamento
    let horas = Math.trunc(segundos_input / 3600)
    let minutos = segundos_input / 60
    let segundos_output = segundos_input - (minutos * 60)
     
    //saida
    print(`São ${horas} horas, ${minutos} minutos, e ${segundos_output} segundos`)
    


}
main()