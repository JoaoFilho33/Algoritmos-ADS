import prompt from "prompt-sync"
const input = prompt()
function main(){
    let x = Number(input('Número 01: '))
    let n = Number(input('Número 02: '))
    let divisao 

    while(n !== 2){
    divisao = x/n
    x += divisao
    n--
    console.log(divisao)
    }
    
}

main()