//Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
//maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
//contrario, é arredondado para o inteiro imediatamente inferior.
import {input} from '../../io_utils.js'
function main(){
    const numero = Number(input('Informe um valor a ser arredondado: '))

    const decimal = numero % 1

    const verificar = comparaMeio(numero)
    
    console.log(`O valor arredondado é: ${verificar}`)

}
main()
function comparaMeio(numero){
    let arredondado
    if((numero % 1).toFixed(4) >= 0.5){
        arredondado = Math.ceil(numero)
    }
    else if((numero % 1).toFixed(4) < 0.5){
        arredondado = Math.floor(numero)
    }
    return arredondado
}