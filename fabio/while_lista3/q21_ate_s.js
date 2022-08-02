import prompt from 'prompt-sync'
const input = prompt()
function main(){
    
    let soma = 0
    let count = 1
    let count2 = 1
    while(count2 <= 50){

        soma += count/count2
        console.log(soma)

        count = count+2
        count2++
    }
    
    console.log(`Soma: ${soma.toFixed(2)}`)

}
main()