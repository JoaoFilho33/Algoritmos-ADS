//Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
//escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
//São pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
//divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
//escreva o quadrado dos números lidos.
import {input} from '../../io_utils.js'
function main(){
    const numero1 = Number(input('Digite um numero: '))
    const numero2 = Number(input('Digite outro numero: '))

    if(numero1 % numero2 === 1){
        const verificar1 = resto1(numero1, numero2)
        console.log(`A soma dos valores é ${verificar1}`)
    }   
    else if(numero1 % numero2 === 2){
        const verificar2 = resto2(numero1, numero2)
        console.log(`Ambos os valores são ${verificar2}`)
    }
    else if(numero1 % numero2 === 3){
        const verificar3 = resto3(numero1, numero2)
        console.log(`A soma dos valores, multiplicados pelo primeiro é ${verificar3}`)
    }
    else if(numero1 % numero2 === 4){
        const verificar4 = resto4(numero1, numero2)
        console.log(`A soma dos valores, divididos por 2 é ${verificar4}`)
    }
    else if(numero1 % numero2 !== [1, 2, 3, 4]){
        const qualquerOutro1 = numero1**2
        const qualquerOutro2 = numero2**2
        console.log(`O quadrado dos valores é ${qualquerOutro1} e ${qualquerOutro2} `)
    }
    

}
main()
//
function resto1(numero1, numero2){
    return numero1 + numero2 + 1   
}
//
function resto2(numero1, numero2){
    let testeVF = ''
    if(numero1 % 2 !== 0 && numero2 % 2 !== 0){
        testeVF = 'ímpares'
    }
    else if(numero1 % 2 === 0 && numero2 % 2 === 0){
        testeVF = 'pares'
    }
    return testeVF
}
//
function resto3(numero1, numero2){
    return (numero1 + numero2) * numero1
}
//
function resto4(numero1, numero2){
    if(numero2 !== 0){
        return(numero1 + numero2) / 2
    }
}

