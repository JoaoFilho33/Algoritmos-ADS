import {input} from "./io_utils.js"
function main(){
    const tempo = Number(input(': '))
    const velocidade_media = Number(input(': '))
    
    const distancia = velocidade_media * tempo
    
    const combustivel = distancia / 12
    
    console.log(`${combustivel.toFixed(3)}`)
}
main()