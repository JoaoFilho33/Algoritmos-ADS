import { ordenar_em_ordem_crescente } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const qtd_elementos = Number(input('Quantidade de elementos: '))
    let vetor = Array()

    for (let i = 0; i < qtd_elementos; i++) {
        vetor[i] = Number(input(`Elemento na pos ${i}: `))
    }

    const ordenado = ordenar_em_ordem_crescente(vetor)

    console.log(ordenado)

}


main()