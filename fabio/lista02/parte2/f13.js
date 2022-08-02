//Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes.
import {input} from '../../io_utils.js'
function main(){
    let numero = input('Digite 5 números distintos (Ex: 1 2 3 4 5): ').split(' ').map(Number)

    const verificarMaior = teste_maior(numero)
    const verificarMenor = teste_menor(numero)

    console.log(`O número ${verificarMaior} e o número ${verificarMenor}`)
}
main()

function teste_maior(numero){
    let maior
    if(numero [0] > numero [1] && numero [0] > numero [2] && numero [0] > numero [3] && numero [0] > numero [4]){
        maior = `${numero[0]} é o maior`
    }
    else if(numero [1] > numero [0] && numero [1] > numero [2] && numero [1] > numero [3] && numero [1] > numero [4]){
        maior = `${numero[1]} é o maior`
    }
    else if(numero [2] > numero [0] && numero [2] > numero [1] && numero [2] > numero [3] && numero [2] > numero [4]){
        maior = `${numero[2]} é o maior`
    }
    else if(numero [3] > numero [0] && numero [3] > numero [1] && numero [3] > numero [2] && numero [3] > numero [4]){
        maior = `${numero[3]} é o maior`
    }
    else if(numero [4] > numero [0] && numero [4] > numero [1] && numero [4] > numero [2] && numero [4] > numero [3]){
        maior = `${numero[4]} é o maior`
    }
    return maior
}

function teste_menor(numero){
    let menor
    if(numero [0] < numero [1] && numero [0] < numero [2] && numero [0] < numero [3] && numero [0] < numero [4]){
        menor = `${numero[0]} é o menor`
    }
    else if(numero [1] < numero [0] && numero [1] < numero [2] && numero [1] < numero [3] && numero [1] < numero [4]){
        menor = `${numero[1]} é o menor`
    }
    else if(numero [2] < numero [0] && numero [2] < numero [1] && numero [2] < numero [3] && numero [2] < numero [4]){
        menor = `${numero[2]} é o menor`
    }
    else if(numero [3] < numero [0] && numero [3] < numero [1] && numero [3] < numero [2] && numero [3] < numero [4]){
        menor = `${numero[3]} é o menor`
    }
    else if(numero [4] < numero [0] && numero [4] < numero [1] && numero [4] < numero [2] && numero [4] < numero [3]){
        menor = `${numero[4]} é o menor`
    }
    return menor
}
