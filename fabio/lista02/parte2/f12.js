//Leia 1 (um) número inteiro e escreva se este número é par ou impar.
import {input} from '../../io_utils.js'
function main(){
    const numero = Number(input('Digite um número inteiro: '))

    const verificar = teste_par(numero)

    console.log(`O numero ${numero} ${verificar}`)
}
function teste_par(numero){
    let sePar = 'é impar'
    if(numero % 2 === 0){
        sePar = 'é par'
    }
    return sePar
}
main()
