import prompt from 'prompt-sync'
const input = prompt()
/*

*/
function main() {
    let num_prova = Number(input('Número da prova: '))
    let qtd_nadadores = -1
    let nome = ''
    let classificacao = 0
    let tempo = 0
    let clube = ''
    const a = 'a'
    const b = 'b'
    let pontuacao = 0
    let pontuacao_a = 0
    let pontuacao_b = 0


    while (num_prova !== 0) {
        console.log(`\t*** Prova (${num_prova}) ***`)
        if (num_prova === 0) {
            break
        }
        qtd_nadadores = Number(input('Qtd de nadadores: '))
        while (qtd_nadadores > 0) {
            nome = input(`Nome do nadador (${qtd_nadadores}): `)
            classificacao = Number(input(`Classificação: `))
            tempo = Number(input(`Tempo: `))
            clube = input('Clube (a ou b): ')

            if (clube === a && classificacao <= 4) {
                if (classificacao === 4) {
                    pontuacao = 3
                }
                else if (classificacao === 3) {
                    pontuacao = 4
                }
                else if (classificacao === 2) {
                    pontuacao = 6
                }
                else if (classificacao === 1) {
                    pontuacao = 9
                }
                pontuacao_a += pontuacao
            }
            else if (clube === b && classificacao <= 4) {
                if (classificacao === 4) {
                    pontuacao = 3
                }
                else if (classificacao === 3) {
                    pontuacao = 4
                }
                else if (classificacao === 2) {
                    pontuacao = 6
                }
                else if (classificacao === 1) {
                    pontuacao = 9
                }
                pontuacao_b += pontuacao
            }
            else {
                pontuacao = 0
                pontuacao_a = pontuacao_a
                pontuacao_b = pontuacao_b
            }

            console.log(`O Nadador ${nome} recebeu ${pontuacao} pontos`)
            console.log(`O time A está com ${pontuacao_a} pontos`)
            console.log(`O time B está com ${pontuacao_b} pontos`)

            qtd_nadadores--
        }
        num_prova--

    }

    if (pontuacao_a > pontuacao_b) {
        console.log('O time A é o campeão')
    }
    else {
        console.log('O time B é o campeão')
    }
}


main()