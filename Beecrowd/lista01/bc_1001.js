//Leia 2 valores inteiros e armazene-os nas variáveis A e B. 
//Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo.
//Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha
//após o resultado, caso contrário, você receberá "Presentation Error".

//saida
//Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. 
//Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.

import {print, input} from "./io_utils.js"
function main(){
    const a = Number(input('a: '))
    const b = Number(input('b: '))

    const soma_ab = a + b

    let x = soma_ab

    print(`X = ${x}`)


}
main()
