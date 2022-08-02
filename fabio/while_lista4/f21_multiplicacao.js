import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num1 = Number(input('Num1: '))
    const num2 = Number(input('Num2: '))

    let soma = 0
    let count = 0
    while(count < num2){
        soma += num1
        count++
    }
    console.log(soma)
}

main()