export function show_opcoes_de_voto(candidatos, tamanho) {
    console.log('*** CANDIDATOS ***')
    for (let i = 0; i < tamanho; i++) {
        console.log(`${i} - ${candidatos[i]}`)
    }

    console.log('Branco')
    console.log('Nulo')
    console.log('Não-opinar')
}

//Essa função faz o vetor na posicao indicada receber 1
export function for_numero_do_candidato(opcao, tamanho) {
    const vetor = new Array(tamanho + 3)

    if (Number(opcao) < tamanho) {
        vetor[Number(opcao)] = 1
        return vetor
    }
    else if (opcao === 'Branco') {
        vetor[tamanho] = 1
        return vetor
    }
    else if (opcao === 'Nulo') {
        vetor[tamanho + 1] = 1
        return vetor
    }
    else if (opcao === 'Não-opinar') {
        vetor[tamanho + 2] = 1
        return vetor
    }

    return false

}

export function soma_vetor(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return soma
}

export function percentual_por_categoria(vetor, soma) {
    const vetor_perc = []
    for (let i = 0; i < vetor.length; i++) {
        vetor_perc[i] = (vetor[i] / soma) * 100
    }

    return vetor_perc.map(Number)
}

export function show_menu_resultado() {
    console.clear()
    let menu = '*** RESUMO ENQUETE ***'
    menu += '\n1 - Quantidade de pessoas entrevistadas'
    menu += '\n2 - Total de votos e percentual de cada candidato'
    menu += '\n3 - Total de votos e percentual Branco'
    menu += '\n4 - Total de votos e percentual Nulo'
    menu += '\n5 - Total de votos e percentual Não-opinaram'
    menu += '\n6 - Qual candidato foi o líder da enquete'
    menu += '\n7 - Se, pela enquete, teria segundo turno ou não'

    menu += '\n0 - Sair'

    console.log(menu)
}

export function total_votos_perc_de_cada_candidato(votos, candidatos, percentual) {
    for (let i = 0; i < votos.length - 3; i++) {//tamanho - 3 para eliminar brancos, nulos e não opinados
        console.log(`Candidato ${candidatos[i]} teve ${votos[i]} votos`)
        console.log(`E um percentual de ${percentual[i].toFixed(2)}% dos votos totais`)
        console.log('')
    }
}

export function total_branco_perc(votos, percentual) {
    for (let i = 0; i < votos.length; i++) {
        if (i === votos.length - 3) { // nessa posicao temos os votos Brancos no vetor
            console.log(`Branco teve ${votos[i]}`)
            console.log(`E um percentual de ${percentual[i]}%`)
        }
    }
}

export function total_nulo_perc(votos, percentual) {
    for (let i = 0; i < votos.length; i++) {
        if (i === votos.length - 2) { // nessa posicao temos os votos Nulos no vetor
            console.log(`Nulos teve ${votos[i]}`)
            console.log(`E um percentual de ${percentual[i]}%`)
        }
    }
}

export function total_nao_opinaram(votos, percentual){
    for (let i = 0; i < votos.length; i++) {
        if (i === votos.length - 1) { // nessa posicao temos os votos Não opinidos no vetor
            console.log(`Não-opinaram teve ${votos[i]}`)
            console.log(`E um percentual de ${percentual[i]}%`)
        }
    }
}

export function candidato_lider(votos, candidatos, percentual){
    //maior recebe os votos na posicao
    let maior = 0
    let lider
    for (let i = 0; i < votos.length - 3; i++) {//tamanho - 3 para eliminar brancos, nulos e não opinados
        if(votos[i] > maior){
            maior = votos[i]
            lider = candidatos[i]
        }
    }

    console.log(`O candidato líder foi o ${lider}`)
}

const percentual_maior_que_51_porcento_votos_validos = (perc_votos) => perc_votos > 51

export function segundo_turno_sim_nao(percentual, votos){
    const perc_votos = percentual_dos_votos_validos(votos)
    const num_percentual = Number(percentual)
    for(let i = 0; i < votos.length-3; i++){
        if(percentual_maior_que_51_porcento_votos_validos(perc_votos[i])){
            return 'Não Haverá segundo turno'
        }
        else{
            return 'Haverá segundo turno'
        }
    }
}

function percentual_dos_votos_validos(vetor) {
    const vetor_perc = []
    const soma = soma_votos_validos(vetor)
    for (let i = 0; i < vetor.length-3; i++) {//subtraio 3 para ignorar as strings branco, nulo, nao opniram
        vetor_perc[i] = (vetor[i] / soma) * 100
    }

    return vetor_perc.map(Number)
}

function soma_votos_validos(vetor){
    let soma = 0
    for (let i = 0; i < vetor.length-3; i++) {//subtraio 3 para ignorar as strings branco, nulo, nao opniram
        soma += vetor[i]
    }

    return soma
}