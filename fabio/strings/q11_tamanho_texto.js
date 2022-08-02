import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const texto = input('Texto: ')
    let caractere = texto.split('').join('')
    const alfabeto = ler_alfabeto()
    console.log(caractere)
    
    let count = 0
    let count_letras = 0
    while(count < texto.length){
        if(for_alfabeto(caractere[count], alfabeto)){
            count_letras++
        }
        count++
    }

    console.log(count_letras)

}

function ler_alfabeto() {
    try {
        const vogal = fs.readFileSync('alfabeto.txt', 'utf-8')
        return vogal
    } catch (error) {
        console.error(error)
    }
}

function for_alfabeto(caractere, alfabeto){
    for (let i = 0; i < alfabeto.length; i++) {
        if (alfabeto[i] === caractere) {
            return true
        }
    }
}

main()