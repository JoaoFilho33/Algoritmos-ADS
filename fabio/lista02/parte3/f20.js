//Leia a medida de um ângulo (entre O e 360º) e escreva o quadrante (primeiro, segundo, terceiro ou
//quarto) em que o ângulo se localiza.
import {input} from '../../io_utils.js'
function main(){
    const angulo = Number(input('Informe o ângulo da circunferência: '))

    if(primeiroQuadrante(angulo)){
        console.log('O ângulo está posicionado no primeiro quadrante')
    }
    else if(segundoQuadrante(angulo)){
        console.log('O ângulo está posicionado no segundo quadrante')
    }
    else if(terceiroQuadrante(angulo)){
        console.log('O ângulo está posicionado no terceiro quadrante')
    }
    else if(quartoQuadrante(angulo)){
        console.log('O ângulo está posicionado no quarto quadrante')
    }
}
main()
function primeiroQuadrante(angulo){
    if(angulo > 0 && angulo < 90){
        return true
    }
}
function segundoQuadrante(angulo){
    if(angulo >= 90 && angulo < 180)
    return true
}
function terceiroQuadrante(angulo){
    if(angulo >= 180 && angulo < 270)
    return true
}
function quartoQuadrante(angulo){
    if(angulo >= 270 && angulo < 360)
    return true
}
