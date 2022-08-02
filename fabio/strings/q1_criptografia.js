import { for_vogal } from './funcoes_string.js'
import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const frase = input('Frase: ')
    const vogais = ler_vogais().split('\n')

    let frase_invertida = new Array()
    let count = 0
    let count2 = frase.length

    while (count2 > 0) {
        frase_invertida[count2] = frase[count]

        if (!for_vogal(frase_invertida[count2], vogais) && frase_invertida[count2] !== ' ') {
                frase_invertida[count2] = '#'
        }

        count++
        count2--
    }

    console.log(frase_invertida.join(''))
}

function ler_vogais() {
    try {
        const vogal = fs.readFileSync('vogais.txt', 'utf-8')
        return vogal
    } catch (error) {
        console.error(error)
    }
}


main()