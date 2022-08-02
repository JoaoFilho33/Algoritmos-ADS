//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
//número = 9534 ; soma = 9+5+3+4 = 21.
import {print, input} from '../io_utils.js'
function main(){
    //entrada
    const numero = input('Informe um número de 4 dígitos: ')

    const digito1 = Number(numero[0])
    const digito2 = Number(numero[1])
    const digito3 = Number(numero[2])
    const digito4 = Number(numero[3])
    

    const soma_digitos = digito1 + digito2 + digito3 + digito4
    //processamento
    print(`A soma dos dígitos informados acima é: ${soma_digitos}`)



}
main()