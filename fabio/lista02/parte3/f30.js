//Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
//o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
//milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
//terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
//2025 -> dividindo: 20 e 25 -> somando temos 45 -> 45º =2025,
import {input} from '../../io_utils.js'
function main(){
    const numero = Number(input('Informe um número de 4 dígitos: '))
    const num1 = numero % 100
    const num2 = Math.trunc(numero/100)

    if(somaTerceiro(numero, num1, num2)){
        console.log('O número atende a condição')
    }
    else{
        console.log('O número não atende a condição')
    }
}
main()
function somaTerceiro(numero, num1, num2){
    let soma = num1 + num2
    let quadrado = soma**2
    if(quadrado === numero){
        return true
    }
    else{
        return false
    }
}