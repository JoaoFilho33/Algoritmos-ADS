//Leia 3(três) números, verifique e escreva quantos números iguais existem entre os números
import {print} from '../../io_utils.js'

let posicao1 = 0
function calcular_iguais(primeiro, segundo, terceiro){
    let resultado = 0

    if(primeiro === segundo && segundo===terceiro){
    resultado = 3
    }
    else if(primeiro === segundo){
        resultado = 3
    }
    else if(primeiro === terceiro){
        resultado = 2
    }
    else if(segundo === terceiro){
        resultado = 2
    }
        return resultado
}

function main(){
    const primeiro = Number(input(('Digite o primeiro número: ')))
    const segundo = Number(input(('Digite o segundo número: ')))
    const terceiro = Number(input(('Digite o terceiro número: ')))

    let iguais = calcular_iguais(primeiro, segundo, terceiro)
    
    console.log(`Existem ${iguais} números iguais`)
    

}
main()

