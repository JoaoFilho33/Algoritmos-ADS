//Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.
import {input} from '../../io_utils.js'
function main(){
    const lados = input('Informe os lados do triângulo: ')
    const[l1, l2, l3] = lados.split(' ').map(Number)

    const verificar1 = eh_hipotenusa(l1, l2, l3)
    const verificar2 = catetos(l1, l2, l3)

    console.log(`A hipotenusa é ${verificar1} e os catetos são ${verificar2}`)
     
}
main()
function eh_hipotenusa(l1, l2, l3){
    let hipotenusa
    if(l1 > l2 && l1 > l3){
        hipotenusa = l1
    }
    else if(l2 > l1 && l2 > l3){
        hipotenusa = l2
    }
    else if(l3 > l1 && l3 > l2){
        hipotenusa = l3
    }
    return hipotenusa
}
function catetos(l1, l2, l3){
    let catetos
    if(l1 > l2 && l1 > l3){
        catetos = `${l2} e ${l3}`
    }
    else if(l2 > l1 && l2 > l3){
        catetos = `${l1} e ${l3}`
    }
    else if(l3 > l1 && l3 > l2){
        catetos = `${l1} e ${l2}`
    }
    return catetos
}