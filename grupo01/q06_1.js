import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let frase 

    do{
        frase = input('Frase: ')
    }
    while(frase.length < 80 && frase.length > 180)

    let tfrase = frase.split(' ')

    console.log(`A frase\n ${frase} \n contém ${tfrase.length} palavras.`)



}
main()