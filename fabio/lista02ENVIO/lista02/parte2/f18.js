//Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 -
//Adição, 2 — Subtração, 3 - Multiplicação e 4 — Divisão). Calcule e escreva o resultado dessa operação
//sobre os dois valores lidos.
import {input} from '../../io_utils.js'
function main(){
    const valores = input('Digite dois valores: ')
    const[v1, v2] = valores.split(' ').map(Number)
    
    const escolha = Number(input(`Escolha uma opção: (adição: 1/ subtração: 2/ multiplicação: 3/ divisão: 4): `))

   if(escolha === 1){
       const verificar1 = escolha1(v1, v2)
       console.log(`A adição dos valores é: ${verificar1}`)
   }
   else if(escolha === 2){
       const verificar2 = escolha2(v1, v2)
       console.log(`A subtração dos valores é: ${verificar2}`)
   }
   else if(escolha === 3){
       const verificar3 = escolha3(v1, v2)
       console.log(`A multiplicação dos valores é: ${verificar3}`)
   }
   else if(escolha === 4){
       const verificar4 = escolha4(v1, v2)
       console.log(`A divisão dos valores é: ${verificar4}`)
   }

}
main()
function escolha1(v1, v2){
    return v1 + v2
}
function escolha2(v1, v2){
    return v1 - v2
}
function escolha3(v1, v2){
    return v1 * v2
}
function escolha4(v1, v2){
    return v1 / v2
}