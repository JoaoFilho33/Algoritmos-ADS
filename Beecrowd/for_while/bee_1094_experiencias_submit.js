import fs from 'fs'
var input = fs.readFileSync('1094.txt', 'utf8');
var lines = input.split('\n');


function main() {
    let n = Number(lines[0])
    let quantia_tipo
    let tipo
    let quantidade
    let quantidade_total
    let qtd_coelhos = 0
    let qtd_ratos = 0
    let qtd_sapos = 0

    let i = 0
    while (i < n) {
        quantia_tipo = lines[i+1].split(' ')
        quantidade = Number(quantia_tipo[0])
        tipo = quantia_tipo[1]
        if (tipo === 'C') {
            qtd_coelhos = quantidade + qtd_coelhos
        }
        else if (tipo === 'R') {
            qtd_ratos = quantidade + qtd_ratos
        }
        else{
            qtd_sapos = quantidade + qtd_sapos
        }
        i++
    }

    quantidade_total = qtd_coelhos + qtd_sapos + qtd_ratos

    const percentual_coelhos = (qtd_coelhos / quantidade_total) * 100
    const percentual_ratos = (qtd_ratos / quantidade_total) * 100
    const percentual_sapos = (qtd_sapos / quantidade_total) * 100


    console.log(`Total: ${quantidade_total} cobaias`)
    console.log(`Total de coelhos: ${qtd_coelhos}`)
    console.log(`Total de ratos: ${qtd_ratos}`)
    console.log(`Total de sapos: ${qtd_sapos}`)
    console.log(`Percentual de coelhos: ${percentual_coelhos.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${percentual_ratos.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${percentual_sapos.toFixed(2)} %`)

}


main()