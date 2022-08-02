import {print, input} from "./io_utils.js"

function main(){
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))
    const D = Number(input('D: '))
    
    const DIFERENCA = (A*B-C*D)
    
    console.log(`DIFERENCA = ${DIFERENCA}`)
}
main()
