import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const numero = Number(input('Número limite da sequência: '))

    let count = 0
    let count2 = 1
    while(count < numero){
        count += count2

        if(count < numero){//essa condição existe pq o trabalho "count += count2" 
        console.log(count) //ocorre antes do valor ser printado
        }

        count2++
    }

}
main()