import {filter_numeros_positivos} from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const qtd_elementos = Number(input('Quantidade de elementos: '))
    const vetor = []
    for(let i = 0; i < qtd_elementos; i++){
        vetor[i] = Number(input('Valores: '))
    }
    
    const positivos_somados = soma_positivos(vetor)

    console.log(`SOMA: ${positivos_somados}`)
}

function soma_positivos(vetor){
    const positivos_filtrados = filter_numeros_positivos(vetor)
    const tamanho = positivos_filtrados.length
    let soma = 0
    for(let i = 0; i < tamanho; i++){
        soma += positivos_filtrados[i]
    }
    
    return soma
}

main()
