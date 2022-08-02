import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const frase = input('Digite uma frase: ').split(' ').join('')
    const nova_frase = frase
    
    console.log(nova_frase)
    
}
main()