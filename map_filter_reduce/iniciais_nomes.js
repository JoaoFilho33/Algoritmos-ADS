import { pegar_iniciais } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const nome = input('Nome: ').split(' ')

    const iniciais = pegar_iniciais(nome)

    console.log(iniciais)

}


main()