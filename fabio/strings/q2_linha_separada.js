import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const frase = input('Digite uma frase: ').split(' ')

    for(let i = 0; i < frase.length; i++){
        console.log(frase[i])
    }

}
main()