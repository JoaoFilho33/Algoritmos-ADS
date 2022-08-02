import { escrever_fibonacci } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const elementos = Number(input('Escrever quantos elementos? '))   
    
    const vetor_fibonacci = Array(0, 1)

    const show_fibonacci = escrever_fibonacci(elementos, vetor_fibonacci)
   
    console.log(show_fibonacci)
}

main()