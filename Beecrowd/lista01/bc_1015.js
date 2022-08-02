import {input} from "./io_utils.js"

function main(){
    const p1 = input(':').split(' ')
    const p2 = input(':').split(' ')
    
    const x1 = Number(p1[0])
    const y1 = Number(p1[1])
    const x2 = Number(p2[0])
    const y2 = Number(p2[1])
    
    const distancia = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))
    
    console.log(`${distancia.toFixed(4)}`)


    
}
main()