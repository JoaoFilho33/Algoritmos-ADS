//Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a 
//cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o 
//valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da 
//mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00. 
//Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas 
//prestações, de acordo com as regras acima.

import {print, input} from '../io_utils.js'
function main(){
    const valorMercadoria = Number(input('Informe o valor da mercadoria: '))

    const parcelas = Math.trunc(valorMercadoria / 3)
    const entrada = valorMercadoria - parcelas * 2
    

    print(`A entrada será de R$ ${entrada},00 e 2 parcelas de R$ ${parcelas},00`)

}
main()
