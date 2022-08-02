//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

import {input, print} from '../io_utils.js'

function main(){
//entrada
const velocidade_ms = Number (input('A velocidade em m/s é: '))

//processamento
const velocidade_kmh = velocidade_ms * 3.6

//saída
print(`O resultado é ${velocidade_kmh} km/h`)

}

main()