//Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
import {input} from '../../io_utils.js'
function teste_validez(data){
    let resultado = 'não é válida'
    if(data [0] === 0 || data [1] === 0 || data [1] > 12){
        resultado = 'não é válida'
    }
    else if(data [1] === 2 && data [0] <= 29){
        resultado = 'é válida'
    }
    else if(data [1] === 1 && data [0] <= 31 || data [1] === 3 && data [0] <= 31){
        resultado = 'é válida'
    }
    else if(data [1] === 5 && data [0] <= 31 || data [1] === 7 && data [0] <= 31 || data [1] === 9 && data [0] <= 31){
        resultado = 'é válida'
    }
    else if(data [1] === 11 && data [0] <= 31){
        resultado = 'é válida'
    }
    else if(data [1] === 4 && data [0] <= 30 || data [1] === 6 && data [0] <= 30 || data [1] === 8 && data [0] <= 30){
        resultado = 'é válida'
    }
    else if(data [1] === 10 && data [0] <= 30 || data [1] === 12 && data [0] <= 30){
        resultado = 'é válida'
    }
    return resultado
}

function main(){
    const data = input('Digite uma data (EX: 2/3/2022): ').split('/').map(Number)

    const verificar = teste_validez(data)

    console.log(`A data ${verificar}`)
}
main()
