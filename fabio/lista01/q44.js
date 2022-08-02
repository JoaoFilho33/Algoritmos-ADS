//Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a 
//quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada 
//pelo usuário.

import {input, print} from '../io_utils.js'
function main(){
    const kg = Number(input('Informe a massa do latão em KG: '))

    const cobre = kg * 0.7
    const zinco = kg * 0.3

    print(`São ${cobre.toFixed(2)} cobre e ${zinco.toFixed(2)} zinco.`)

}
main()