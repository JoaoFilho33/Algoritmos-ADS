import {print, input} from "./io_utils.js"

function main(){
    const valor = input(':').split(' ')
    
    const A = Number(valor[0])
    const B = Number(valor[1])
    const C = Number(valor[2])
    
    const AB = ((A+B + Math.abs(A-B))) / 2
    
    const AB_C = ((AB + C + Math.abs(AB - C))) / 2
    console.log(`${AB_C} eh o maior`)
}
main()