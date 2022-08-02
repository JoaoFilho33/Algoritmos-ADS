import {print, input} from "./io_utils.js"
function main(){
    const raio = Number(input(': '))

    const area = 3.14159 * Math.pow(raio,2)

    print (`A=${area.toFixed(4)}`)
}
main()