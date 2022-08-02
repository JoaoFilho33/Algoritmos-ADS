//Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
//(IMC = peso / altura^2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
//IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
import {input} from '../../io_utils.js'
function main(){
    const alturaPeso = input('Digite sua altura e seu peso: ')
    const [a1, p1] = alturaPeso.split(' ').map(Number)

    const imc = verificar_imc(a1, p1)
    if(imc < 25){
        console.log('O seu peso está normal')
    }
    else if(imc > 25 && imc < 30){
        console.log('Você está obeso')
    }
    else if(imc > 30){
        console.log('Você está com obesidade mórbida')
    }
}
main()
function verificar_imc(a1, p1){
    return p1 / a1**2
}