//Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele 
//fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import {print, input} from '../io_utils.js'
function main(){
    const anos_fumo = Number(input('Digite a quantos anos você fuma: '))
    const numero_cigarro = Number(input('Digite a quantidade de cigarros que você fuma em um dia: '))
    const preço_carteira = Number(input('Digite o preço de uma carteira de cigarro: '))

    //const carteira = 20

    const valor_carteira = Math.ceil(numero_cigarro / 20) * preço_carteira
    const valor_mes = valor_carteira * 30.42
    const valor_ano = valor_mes * 12

    const valor_total = valor_ano * anos_fumo

    //
    print(`Valor gasto com cigarro: ${Math.trunc(valor_total)}`)

}
main()