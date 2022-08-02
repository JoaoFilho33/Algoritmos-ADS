import { fazer_fatorial } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const elemento = Number(input('> '))

    const fatorial = fazer_fatorial(elemento)

    console.log(fatorial)

}

main()