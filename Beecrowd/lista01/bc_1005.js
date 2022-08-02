import { input} from "./io_utils.js"

function main(){
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    
    const media = (A * 3.5 + B * 7.5) / 11
   
   console.log(`MEDIA = ${media.toFixed(5)}`) 
}
main()