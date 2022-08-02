import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const frase = input('Digite uma frase: ').split('').join('')
    let frase_duplicada = ['']

    for(let i=0; i < frase.length; i++){
        frase_duplicada += frase[i] + frase[i]
    }

    console.log(frase_duplicada)
}
main()