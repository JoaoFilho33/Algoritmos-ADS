import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const largura = Number(input('Largura (cm): '))
    const comprimento = Number(input('Comprimento (cm): '))
    const profundidade = Number(input('Profundidade (cm): '))

    const capacidade_recomendada = maximo(largura, comprimento, profundidade)

    console.log(`A piscina deve ser enchida até no máximo ${capacidade_recomendada} litros`)

    const valor_agua = Number(input('Preço cobrado por cada 1000 litros na sua cidade: '))
    const piscina_cheia = gasto_para_encher_a_piscina(valor_agua, capacidade_recomendada)

    console.log(`Encher a piscina no limite custa R$ ${piscina_cheia.toFixed(2)}`)

    const reposicao = capacidade_recomendada * 0.1 //é necessário repor 10% da piscina mensalmente 
    const preco_repor = gasto_para_encher_a_piscina(valor_agua, reposicao)//reposicao é o novo volume de água que precisa ser inserido

    console.log(`Você terá um gasto mensal de R$ ${preco_repor.toFixed(2)} para repor a água perdida`)
}
function maximo(l, c, p) {
    const capacidade_total = (l * c * p) / 1000

    return capacidade_total * 0.85//a piscica deve ser enchida até no máximo 85% de sua capacidade
}

function gasto_para_encher_a_piscina(valor_agua, capacidade) {
    let gasto_total
    let valor_parcial

    if (capacidade % 1000 > 0) {
        valor_parcial = Math.floor(capacidade / 1000) + 1//Se sobra resto quer dizer que o valor pago já entrou na outra faixa, por isso soma + 1

    } else {
        valor_parcial = capacidade / 1000
    }

    gasto_total = valor_agua * valor_parcial

    return gasto_total
}


main()