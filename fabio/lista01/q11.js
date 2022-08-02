//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
import{print, input} from '../../../io_utils.js'

function main(){
    //entrada

    let numero =  Number(input('Digite um número de 3 dígitos: ')) 

    //processamento
    
    


    //saida
    print(`${numero}`.split('').reverse().join(''))

}
main()