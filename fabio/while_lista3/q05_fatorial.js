import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let numero = Number(input('Informe um número: '))

    let count = numero - 1
    while(count > 0){
        numero *= count
        count--
    }

    console.log(`Fatorial = ${numero}`)
}


main()