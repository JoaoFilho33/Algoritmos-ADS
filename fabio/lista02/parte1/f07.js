//Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
//(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
//formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
//escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
import {input} from '../../io_utils.js'

//function teste_triangulo (a soma de dois lados não pode ser menor que o terceiro lado)
function teste_triangulo(numero1, numero2, numero3){
    let resultado1 = 'é um triângulo'
    if(numero1 + numero2 < numero3){
        resultado1 = 'não forma um triângulo'
    }
    else if(numero1 + numero3 < numero2){
        resultado1 = 'não forma um triângulo'
    }
    else if(numero2 + numero1 < numero3){
        resultado1 = 'não forma um triângulo'
    }
    else if(numero2 + numero3 < numero1){
        resultado1 = 'não forma um triângulo'
    }
    else if(numero3 + numero1 < numero2){
        resultado1 = 'não forma um triângulo'
    }
    else if(numero3 + numero2 < numero1){
        resultado1 = 'não forma um triângulo'
    }
    return resultado1
}

//function teste_equilatero
function teste_equilatero(numero1, numero2, numero3){
    let resultado2 = ''
    if(numero1 === numero2 && numero2 === numero3){
        resultado2 = 'equilátero'
    }
    else if(numero1 !== numero2 || numero2 !== numero3){
        resultado2 = ''
    }
    
    return resultado2
}

//function teste_isosceles
//nesse caso, o "else if" de < menor que poderia ser colocado na função que o antecede, com o auxílio do || (ou)
//EX: if(numero1 === numero2 && numero2 > numero3 || numero2 < numero3)
function teste_isosceles(numero1, numero2, numero3){
    let resultado3 = ''
    if(numero1 === numero2 && numero2 > numero3){
        resultado3 = 'isósceles'
    }
    else if(numero1 === numero2 && numero2 < numero3){
        resultado3 = 'isósceles'
    }
    else if(numero1 === numero3 && numero3 > numero2){
        resultado3 = 'isósceles'
    }
    else if(numero1 === numero3 && numero3 < numero2){
        resultado3 = 'isósceles'
    }
    else if(numero2 === numero1 && numero1 > numero3){
        resultado3 = 'isósceles'
    }
    else if(numero2 === numero1 && numero1 < numero3){
        resultado3 = 'isósceles'
    }
    else if(numero2 === numero3 && numero3 > numero1){
        resultado3 = 'isósceles'
    }
    else if(numero2 === numero3 && numero3 < numero1){
        resultado3 = 'isósceles'
    }
    else if(numero3 === numero1 && numero1 > numero2){
        resultado3 = 'isósceles'
    }
    else if(numero3 === numero1 && numero1 < numero2){
        resultado3 = 'isósceles'
    }
    else if(numero3 === numero2 && numero2 > numero1){
        resultado3 = 'isósceles'
    }
    else if(numero3 === numero2 && numero2 < numero1){
        resultado3 = 'isósceles'
    }
    return resultado3
}

//function verificar_escaleno
//todos os numeros digitados devem ser diferentes
function teste_escaleno(numero1, numero2, numero3){
    let resultado4 = ''
    if(numero1 !== numero2 && numero2 !== numero3 && numero3 !== numero1){
        resultado4 = 'escaleno'
    }
    else if(numero1 !== numero3 && numero3 !== numero2 && numero2 !== numero1){
        resultado4 = 'escaleno'
    }
    else if(numero2 !== numero1 && numero1 !== numero3 && numero3 !== numero2){
        resultado4 = 'escaleno'
    }
    else if(numero2 !== numero3 && numero3 !== numero1 && numero1 !== numero2){
        resultado4 = 'escaleno'
    }
    else if(numero3 !== numero1 && numero1 !== numero2 && numero2 !== numero3){
        resultado4 = 'escaleno'
    }
    else if(numero3 !== numero2 && numero2 !== numero1 && numero1 !== numero3){
        resultado4 = 'escaleno'
    }
    return resultado4
    
}

function main(){
   const numero1 = Number(input('Digite um número (lado triângulo): '))
   const numero2 = Number(input('Digite outro número: '))
   const numero3 = Number(input('Digite outro número: '))

   const formaTriangulo = teste_triangulo(numero1, numero2, numero3)
   const verificarEquilatero = teste_equilatero(numero1, numero2, numero3)
   const verificarIsosceles = teste_isosceles(numero1, numero2, numero3)
   const verificarEscaleno = teste_escaleno(numero1, numero2, numero3)

   console.log(`O valor ${formaTriangulo} ${verificarEquilatero}${verificarIsosceles}${verificarEscaleno} `)
}
main()