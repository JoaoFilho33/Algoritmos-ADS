import { for_vogal, ler_vogais } from './funcoes_string.js'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let texto = input('Texto: ').split('')
    let guarda_pos = new Array()
    const vogais = ler_vogais()
    
    let count = 0
    while(count < texto.length){
        guarda_pos[count] = texto[count]
        if(for_vogal(texto[count], vogais)){
            texto[count] = ' '
        }
        count++
    }
    console.log(`**Criptografado: ${texto.join('')}`)

    let count2 = 0
    while(count2 < texto.length){
        if(texto[count2] === ' '){
            texto[count2] = guarda_pos[count2]
        }
        count2++
    }
    console.log(`**Descriptografado: ${texto.join('')}`)

}


main()