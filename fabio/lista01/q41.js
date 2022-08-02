//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do 
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor 
//seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e 
//escreva o custo ao consumidor.

import{print, input} from '../io_utils.js'
function main(){
    const fabrica_carro = Number(input('Informe o preço de fabrica do carro: '))

    const distribuidor = (0.28 * fabrica_carro) + fabrica_carro
    const impostos = (0.45 * fabrica_carro) + fabrica_carro

    const consumidor = distribuidor + impostos

    print(`O preço a ser pago pelo consumidor é: ${consumidor}.`)

}
main()