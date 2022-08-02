//Leia 3 numeros (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 números formam
//um triângulo (a soma dos ângulos internos é igual a 180 graus). Se formam, verifique se formam um triângulo acutângulo
//(3 ângulos < 90 graus), retângulo (1 ângulo = 90 graus) ou obtusângulo (1 ângulo > 90 graus). Não existe ângulo 0.

import {input} from '../../io_utils.js'

//A function triangulo180 prova se os valores digitados formam um triângulo, ou não
function triangulo180(numero1, numero2, numero3){
    let resultado1 = 0
    const soma180 = numero1 +  numero2 + numero3
    if(soma180 === 180){
        
        resultado1 = 'é um triângulo'
    }
    else if(soma180 < 180 || soma180 > 180){
        
        resultado1 = 'não é um triângulo'
    }
    return resultado1
}   

//A function teste_acutangulo testa se o valor é acutangulo
function teste_acutangulo(numero1, numero2, numero3){
    let resultado2 = ''
    if(numero1 < 90 && numero2 < 90 && numero3 < 90){
        resultado2 = 'acutângulo'
    }
    return resultado2    
}

//function teste_retangulo
function teste_retangulo(numero1, numero2, numero3){
    let resultado3 = ''
    if(numero1 === 90 || numero2 === 90 || numero3 === 90){
        resultado3 = 'retângulo'
    }
        return resultado3
}

//function teste_escaleno
function teste_obtusangulo(numero1, numero2, numero3){
    let resultado4 = ''
    if(numero1 > 90 || numero2 > 90 || numero3 > 90){
        resultado4 = 'obtusângulo'
    }
    return resultado4
}
function main(){
    //entrada
    const numero1 = Number(input('Digite um valor (ângulo): '))
    const numero2 = Number(input('Digite outro valor: '))
    const numero3 = Number(input('Digite outro valor: '))

    //entrada
    const verificar180 = triangulo180(numero1, numero2, numero3)
    const verificarAcutangulo = teste_acutangulo(numero1, numero2, numero3)
    const verificarRetangulo = teste_retangulo(numero1, numero2, numero3)
    const verificarObtusangulo = teste_obtusangulo(numero1, numero2, numero3)

    //saida
    console.log(`O valor ${verificar180} ${verificarAcutangulo}${verificarRetangulo}${verificarObtusangulo}`)
}
main()