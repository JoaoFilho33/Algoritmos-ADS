import fs from 'fs'
const alunos = fs.readFileSync('dados_alunos.txt', 'utf-8').split('\n')

function main() {
    let qtd_aprovados = 0
    let qtd_reprovados = 0
    let qtd_prova_final = 0
    let reprovados_falta = 0
    let media_parcial = 0
    let media
    
    let count_alunos = 0
    for(let aluno of alunos){
        let dados = aluno.split(';')
        const nome = dados[0]
        const nota1 = Number(dados[1])
        const nota2 = Number(dados[2])
        const nota3 = Number(dados[3])
        const qtd_faltas = dados[4].split('/').map(Number)

        const percentual_faltas = (qtd_faltas[0] / qtd_faltas[1]) * 100
        media = media_ponderada(nota1, nota2, nota3)

        media_parcial += media

        console.log(`Média do(a) ${nome} foi de ${media.toFixed(2)} pontos`)

        if (percentual_faltas > 25) {
            if (media >= 7) {
                qtd_aprovados++

            } else if (media < 7 && media <= 4) {
                qtd_prova_final++

            } else {
                qtd_reprovados++

            }
        } else {
            qtd_reprovados++
            reprovados_falta++
        }

        count_alunos++
    }


    console.log(`Média da classe: ${media_clase(media_parcial, count_alunos).toFixed(2)}`)
    console.log(`Número de aprovados: ${qtd_aprovados}`)
    console.log(`Número de reprovados: ${qtd_reprovados}`)
    console.log(`Ficaram de prova final: ${qtd_prova_final}`)
    console.log(`Reprovados por falta: ${reprovados_falta}`)

}
function media_ponderada (n1, n2, n3){
    const mp = ((n1*1) + (n2*2) + (n3*3)) / (1+2+3)
    return mp
}

const media_clase = (media_parcial, num_alunos) => media_parcial / num_alunos



main()