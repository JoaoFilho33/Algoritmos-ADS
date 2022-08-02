//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import{print, input} from '../io_utils.js'
function main(){
    //entrada
    const raio = Number(input('Digite o valor do raio da circunferência: '))
    const pi = 3.14

    //processamento
    const comprimento = 2 * pi * raio

    //saida
    print(`O comprimento é: ${comprimento}`)



}
main()