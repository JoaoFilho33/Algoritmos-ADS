import { inverter_palavras } from './funcoes_string.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const palavra = input('Palavra: ').split('').join('')
    let palavra_nova = inverter_palavras(palavra).join('')

    console.log(`(${palavra_nova})`)

    if (palavra === palavra_nova) {
        console.log('É um palíndromo')
    }
    else {
        console.log('Não é palíndromo')
    }

}


main()