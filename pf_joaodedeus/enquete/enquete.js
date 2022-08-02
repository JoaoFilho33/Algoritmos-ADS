import { new_vetor } from './vetor_utils.js'
import {
    show_opcoes_de_voto, for_numero_do_candidato,
    percentual_por_categoria, soma_vetor,
     total_branco_perc,
    total_nulo_perc, total_nao_opinaram, candidato_lider,
    segundo_turno_sim_nao
} from './enquete_utils.js'
import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const qtd_candidatos = Number(input('Exibir quantos candidatos: '))

    let vetor_candidatos = new_vetor(qtd_candidatos)
    let vetor_votos = new_vetor(qtd_candidatos + 3)
    let opcao
    const tamanho_candidatos = vetor_candidatos.length
    let count_entrevistados = 0

    for (let i = 0; i < vetor_votos.length; i++) {
        vetor_votos[i] = 0
    }

    for (let i = 0; i < vetor_candidatos.length; i++) {
        vetor_candidatos[i] = input('Nome do candidato: ')
    }

    console.clear()
    console.log(vetor_candidatos)
    show_opcoes_de_voto(vetor_candidatos, tamanho_candidatos)


    opcao = input('Sua opção de voto: ')
    while (opcao !== '-1') {
        const votos = for_numero_do_candidato(opcao, tamanho_candidatos)
        if (for_numero_do_candidato(opcao, tamanho_candidatos)) {
            for (let i = 0; i < vetor_votos.length; i++) {
                if (votos[i] === 1) {
                    vetor_votos[i] += 1
                }
            }
            console.clear()
            input('<enter> to continue')
        }
        else {
            console.clear()
            console.log('Voto Inválido')
            input('<enter> to continue')
        }
        console.clear()
        show_opcoes_de_voto(vetor_candidatos, tamanho_candidatos)
        opcao = input('Sua opção de voto: ')

        count_entrevistados++
    }

    const soma = soma_vetor(vetor_votos)

    const percentual = percentual_por_categoria(vetor_votos, soma)
   
            console.clear()
            console.log(`Foram entrevistadas ${count_entrevistados} pessoas`)
            for(let i = 0; i < tamanho_candidatos; i++){
                console.log(`O candidato ${vetor_candidatos[i]} fez ${percentual[i]}% dos votos`)
                console.log('')
            }
            total_branco_perc(vetor_votos, percentual)
            total_nulo_perc(vetor_votos, percentual)
            total_nao_opinaram(vetor_votos, percentual)
            candidato_lider(vetor_votos, vetor_candidatos, percentual)
            const segundo_turno = segundo_turno_sim_nao(percentual, vetor_votos)
            console.log(segundo_turno)

}


main()