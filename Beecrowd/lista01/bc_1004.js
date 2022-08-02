import { input} from "./io_utils.js"

function main(){
    const inteiro1 = Number(input('A: '))
    const inteiro2 = Number(input('B: '))
    
    const PROD = inteiro1 * inteiro2
    
    console.log(`PROD = ${PROD}`)
}
main()