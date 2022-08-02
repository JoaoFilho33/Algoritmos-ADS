import {print, input} from "./io_utils.js"

function main(){
    const km = Number(input(':'))
    const combustivel = Number(input(':'))
    
    const consumo_medio = km / combustivel
    
    console.log(`${consumo_medio.toFixed(3)} km/l`)
}
main()