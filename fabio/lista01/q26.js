//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
import{print, input} from '../io_utils.js'
function main(){
    //entrada
    let dias_input = Number(input('Informe o valor em dias: '))
    
    //processamento

    let semana = Math.trunc(dias_input / 7)
    let dias_output = dias_input - (semana * 7)

    //saida
    print(`A quantidade de semanas é ${(semana)} e dias é ${dias_output}`)

}
main()