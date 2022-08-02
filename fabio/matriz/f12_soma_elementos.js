import { numeros_aleatorios, new_matriz } from './matriz_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const ordem = Number(input('Ordem: '))
    const matriz = new_matriz(ordem, ordem)

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            matriz[i][j] = numeros_aleatorios()
        }
    }

    const soma_principal = somar_diagonal_principal(matriz, ordem)
    const soma_secundaria = somar_diagonal_secundaria(matriz, ordem)
    const soma_outros = somar_outros_elementos(matriz, ordem)

    console.table(matriz)
    console.log(`Soma D_principal: ${soma_principal}`)
    console.log(`Soma D_secundaria: ${soma_secundaria}`)
    console.log(`Soma outros elementos: ${soma_outros}`)

    
}
function somar_diagonal_principal(matriz, linha) {
    let soma = 0
    let count = 0

    for (let i = 0; i < linha; i++) {
        for (let j = i; count < 1; j++) {
            soma += matriz[i][j]
            count++
        }
        count = 0
    }

    return soma
}

function somar_diagonal_secundaria(matriz, linha) {
    let soma = 0

    for (let i = 0; i < linha; i++) {
        for (let j = 0; j < linha; j++) {
            if (i + j === linha - 1) {
                soma += matriz[i][j]
            }
        }
    }

    return soma
}

function somar_outros_elementos(matriz, linha){
    let soma = 0

    for(let i = 0; i < linha; i++){
        for(let j = 0; j < linha; j++){
            if(i !== j && i + j !== linha-1){
                soma += matriz[i][j]
            }
        }
    }

    return soma
}


main()