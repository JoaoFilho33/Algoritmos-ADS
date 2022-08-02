import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const numero = Number(input('Número: '))

    let count = 0
    while(count < numero){
        if(count**2 < numero){
            count++
        }
        else{
            break
        }
    }
    console.log(`O maior quadrado menor que ${numero} é ${count-1}`)
    //count-1 serve para retroceder uma volta no contador, pois ele acaba somando +1 antes
    //encerrar a volta do while
}
main()