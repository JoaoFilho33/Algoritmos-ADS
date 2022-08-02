import prompt from 'prompt-sync'
const input = prompt()
import { random } from './funcoes_while3.js'

function main() {
    const sorteio = random(100000)
    console.log(sorteio)

    for (let i = 0; i !== sorteio; i = 1) {
        i = Number(input('Valor: '))
        if (i === sorteio) {
            break
        }
        if (i < sorteio) {
            console.log('Maior')
        }
        else if (i > sorteio) {
            console.log('Menor')
        }
    }
}
main()

