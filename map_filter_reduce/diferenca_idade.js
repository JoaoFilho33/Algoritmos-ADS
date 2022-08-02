import { menor_idade, maior_idade } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const qtd_elementos = Number(input('Quantidade de pessoas: '))
    const vetor = []

    for(let i = 0; i < qtd_elementos; i++){
        vetor[i] = Number(input('idade: '))
    }

    const maior = maior_idade(vetor)
    const menor = menor_idade(vetor)
    const diferenca = maior - menor

    console.log(maior, menor, diferenca)

}


main()