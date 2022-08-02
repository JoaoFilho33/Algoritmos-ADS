import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let jogador1 = 0
    let jogador2 = 0
    let pontuacao
    let count_partida = 1

    while(jogador1 < 21 && jogador2 < 21){
        console.log(`\t***Partida ${count_partida}***`)
        count_partida++
        pontuacao = Number(input('Um ponto para o jogador (1 ou 2): '))

        if(pontuacao === 1){
            jogador1++
        }
        else if(pontuacao === 2){
            jogador2++
        }
        console.log(`Jogador 1 (${jogador1})`)
        console.log(`Jogador 2 (${jogador2})`)

    }

    const enquanto = diferença_de_pontos_nao_atingida(jogador1, jogador2, pontuacao)

    console.log(enquanto)

}
main()

function diferença_de_pontos_nao_atingida(j1, j2, pontuacao){
    while(!(j1 - j2 >= 2) && !(j2 - j1 >=2)){
    console.log('\t***A diferança de pontos ainda não foi atingida***')
    pontuacao = Number(input('Um ponto para o jogador (1 ou 2): '))

        if(pontuacao === 1){
        j1++
        }
        else if(pontuacao === 2){
        j2++
        }
        console.log(`Jogador 1 (${j1})`)
        console.log(`Jogador 2 (${j2})`)
    }
    if(j1 > j2){
    return 'O vencedor é o jogador 1'

    }else{
    return 'O vencedor é o jogador 2'
    }
}
