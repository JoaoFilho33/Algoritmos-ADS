//Leia os coeficientes (A, B e C) de uma equações de 2º grau e escreva suas raízes. Vale lembrar que o
//coeficiente A deve ser diferente de 0 (zero).
import {input} from '../../io_utils.js'
function main(){
    const equacao2 = input('Digite os coeficientes A, B, C da raíz de segundo grau: ')
    const [a, b, c] = equacao2.split(' ').map(Number)

    const verificar1 = raizes1(a, b, c)
    const verificar2 = raizes2(a, b, c)

    console.log(`As raízes são ${verificar1} e ${verificar2}`)
}
main()
function raizes1(a, b, c){
    let x
    let delta = (b**2) - (4 * a * c)
    if(a !== 0){
        x = ((b * (-1)) + Math.sqrt(delta)) / 2 * a
    } 
    return x
}
//
function raizes2(a, b, c){
    let x
    let delta = (b**2) - (4 * a * c)
    if(a !== 0){
        x = ((b * (-1)) - Math.sqrt(delta)) / 2 * a
    }  
    return x
}