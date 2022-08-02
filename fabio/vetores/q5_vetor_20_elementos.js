//import { eh_par_ou_nulo } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const vetorA = [1, 5, 7, 9, 10, 3, 7, 8, 2, 23, 55, 12, 18, 45, 32, 46, 47, 19, 13, 12]  
    
    let s = 0

    let count = 0
    let count_cresce = 0
    let count_descresce = vetorA.length-1

    while(count < 10){
            s += (vetorA[count_cresce] - vetorA[count_descresce])**2
        count++
        count_cresce++
        count_descresce--
    }
    console.log(s)

}


main()