//Leia um valor em km, calcule e escreva o equivalente em m.
import {input, print} from '../io_utils.js'
function main(){
    //entrada
    const comprimento_km = Number(input('Digite um valor em Km: '))

    //processamento
    const comprimento_m = comprimento_km * 1000

    //saida
    print(`O comprimento em metros é: ${comprimento_m} metros`)

}
main()