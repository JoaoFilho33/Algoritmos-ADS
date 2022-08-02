import {input} from "./io_utils.js"

function main(){
    const km = Number(input('Distância entre X e Y em Km: '))
    
    const minutos = km * 2
    
    console.log(`${minutos} minutos`)
}
main()