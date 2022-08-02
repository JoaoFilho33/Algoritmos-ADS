import {print, input} from "./io_utils.js"

function main(){
    const raio = Number(input(': '))
    const volume = (4/3.0) * 3.14159 * raio * raio * raio
    
    console.log(`VOLUME = ${volume.toFixed(3)}`)
    
}
main()