import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const numero = Number(input('Número: '))

    let count = 0
    while(count < numero){
        
        if(count % 2 === 0){
            console.log(count)
        }
        count++
    }
}
main()