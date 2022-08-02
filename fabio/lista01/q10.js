//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º
import{print, input} from '../io_utils.js'

function main(){
    //entrada
    let numero1 = Number(input('Digite um número inteiro: '))
    let numero2 = Number(input('Digite outro número inteiro: '))

    //processamento
    const quociente = numero1 / numero2
    const resto = numero1 % numero2

    //saída
    print(`O quociente é ${quociente} e o resto é ${resto}.`)


}
main()