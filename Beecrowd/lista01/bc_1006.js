import {print, input} from "./io_utils.js"

function main(){
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))
    
    const media = (A * 2 + B * 3 + C * 5) / 10
    
    console.log(`MEDIA = ${media.toFixed(1)}`)
}
main()