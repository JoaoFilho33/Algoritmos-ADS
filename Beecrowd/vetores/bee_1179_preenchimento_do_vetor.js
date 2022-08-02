import { for_negativo_ou_nulo } from './vetor_bee_utils.js'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let valor = new Array()

    for(let i = 0; i < 10; i++){
        valor[i] = Number(input('Num: '))
    }
    
    for(let i = 0; i < valor.length; i++){
        if(for_negativo_ou_nulo(valor[i])){
            console.log(`X[${[i]}] = 1`)
        }
        else{
            console.log(`X[${[i]}] = ${valor[i]}`)
        }
    }

}


main()