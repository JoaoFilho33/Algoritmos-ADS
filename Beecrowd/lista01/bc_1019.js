import {input} from "./io_utils.js"

function main(){
    const segundos = Number(input(':'))
    
    let horas = Number(segundos[0])
    let minutos = Number(segundos[1])
    let segundos2 = Number(segundos[2])
    

    horas = Math.trunc(segundos / 3600)
    let resto = segundos % 3600
    
    minutos = Math.trunc(resto / 60)
    let resto1 = resto % 60
    
    segundos2 = resto1
    

    console.log(`${horas}:${minutos}:${resto1}`)
}
main()