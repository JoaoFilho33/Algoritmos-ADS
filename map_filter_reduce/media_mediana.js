import { calcular_media, calcular_mediana } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const qtd_elementos = Number(input('Quantidade de elementos: '))
    const vetor = []

    for(let i = 0; i < qtd_elementos; i++){
        vetor[i] = Number(input('Valores: '))
    }

    const media = calcular_media(vetor)
    const mediana  = calcular_mediana(vetor)

    console.log(`MEDIA: ${media}`)
    console.log(`MEDIANA: ${mediana}`)


}


main()