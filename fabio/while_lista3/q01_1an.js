import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const numero = Number(input('Informe um número qualquer: '))

    let count = 1
    while(count < numero){
        console.log(count++)
    }
    console.log(count)
}


main()