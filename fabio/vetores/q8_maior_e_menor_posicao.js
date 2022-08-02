import { maior_elemento, menor_elemento } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const qtd_elementos = Number(input('Quantidade de elementos no vetor: '))
    const vetor = Array()

    for (let i = 0; i < qtd_elementos; i++) {
        vetor[i] = Number(input(`Valor no indice ${i}: `))
    }

    let [maior, pos_maior] = maior_elemento(vetor)
    let [menor, pos_menor] = menor_elemento(vetor)

    console.log(`Maior elemento: ${maior}`)
    console.log(`Posição: ${pos_maior}`)
    console.log(`Menor elemento: ${menor}`)
    console.log(`Posição: ${pos_menor}`)


}

main()