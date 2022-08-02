import prompt from 'prompt-sync'
const input = prompt()
import { eh_par } from './funcoes_while3.js'

function main(){
    const num = Number(input('Número: '))

    let count = 1
    let soma = 0
    while(count <= num){
        if(eh_par(count)){
            soma -= 1/count
            console.log(soma)
        }
        else{
            soma += 1/count
            console.log(soma)
        }
        count++
    }

    console.log(`Total: ${soma.toFixed(2)}`)

}


main()