import fs from 'fs'

export function criar_e_salvar_em_arquivo(elementos, nome_do_arquivo) {
    const string = elementos.join('\n')
    fs.writeFileSync(`${nome_do_arquivo}.txt`, string, 'utf-8')
}

const consumo_ate_30_kwh = (consumo) => consumo <= 30

const consumo_superior_200_kwh = (consumo) => consumo >= 200

export function fatura_mensal_unica(nome_do_arquivo) {
    const arquivo = loadfile_arquivo(nome_do_arquivo)
    let valor_kwh
    if (consumo_ate_30_kwh(Number(arquivo[1]))) {
        valor_kwh = 0
    } else if (consumo_superior_200_kwh(Number(arquivo[1]))) {
        valor_kwh = (0.89 * 0.3) + 0.89
    } else {
        valor_kwh = 0.89
    }
    let valor_consumo = Number(arquivo[1]) * valor_kwh
    const acrescimo_bandeira = valor_individual_bandeira(arquivo[1], arquivo[2])
    const total_sem_impostos = valor_consumo + acrescimo_bandeira[0]
    const icms = total_sem_impostos * 0.25
    const pis_cofins = total_sem_impostos * 0.375
    const iluminacao = total_sem_impostos * 0.03
    const total = total_sem_impostos + icms + pis_cofins + iluminacao

    console.log(`Consumidor: ${arquivo[0]}`)
    console.log(`Consumo (KWH): ${arquivo[1]}`)
    console.log(`Consumo (R$): R$ ${valor_consumo.toFixed(2)} (valor por KWh: R$ ${valor_kwh})`)
    console.log(`Bandeira Tarifária: R$ ${acrescimo_bandeira[0].toFixed(2)} (valor por 100KWh: ${acrescimo_bandeira[1]})`)
    console.log(`Total sem impostos: R$ ${total_sem_impostos.toFixed(2)}`)
    console.log(`ICMS: R$ ${icms.toFixed(2)}`)
    console.log(`PIS/COFINS: R$ ${pis_cofins.toFixed(2)}`)
    console.log(`Iluminação Pública: R$ ${iluminacao.toFixed(2)}`)
    console.log('-----------------------------------------------')
    console.log(`Total a pagar: R$ ${total.toFixed(2)}`)
}

export function valor_individual_bandeira(consumo, bandeira) {
    const number_consumo = Number(consumo)
    const faixa_100_KWh = Math.trunc(number_consumo / 100)
    const verde = 0
    const amarela = 2.989
    const vermelha1 = 6.500
    const vermelha2 = 9.795
    let adicional = 0
    if (bandeira === 'VERDE') {
        return [adicional, verde]
    }
    else if (bandeira === 'AMARELA') {
        adicional = faixa_100_KWh * amarela
        return [adicional, amarela]
    }
    else if (bandeira === 'VERMELHA1') {
        adicional = faixa_100_KWh * vermelha1
        return [adicional, vermelha1]
    }
    else if (bandeira === 'VERMELHA2') {
        adicional = faixa_100_KWh * vermelha2
        return [adicional, vermelha2]
    }

}

export function loadfile_arquivo(nome_do_arquivo) {
    const dados = fs.readFileSync(`${nome_do_arquivo}.txt`, 'utf8')
    const vetor = dados.split('\n')

    return vetor
}