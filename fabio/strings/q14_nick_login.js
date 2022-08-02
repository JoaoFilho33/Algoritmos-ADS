import { pega_inicial } from './funcoes_string.js'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const nome = input('Nome completo: ').split(' ')
    let nick = new Array()

    let count = 0
    while(count < nome.length){
        nick[count] = pega_inicial(nome[count])

        count++
    }

    console.log('Nick de login: ',nick.join(''))
}
main()