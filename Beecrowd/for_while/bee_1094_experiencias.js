import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let n = Number(input('Número de testes: '))
    let quantia_tipo
    let tipo = ''
    let quantidade = 0
    let qtd_coelhos = 0
    let qtd_ratos = 0
    let qtd_sapos = 0
    let qtd_cobaias = 0

    let i = 0
    while (i < n) {
        quantia_tipo = input(': ').split(' ')
        quantidade = Number(quantia_tipo[0])
        tipo = quantia_tipo[1]
        console.log(`TIPO ${tipo}`)
        qtd_cobaias += quantidade
        if (tipo === 'C') {
            qtd_coelhos += quantidade
        }
        else if (tipo === 'R') {
            qtd_ratos += quantidade
        }
        else if (tipo === 'S') {
            qtd_sapos += quantidade
        }
        i++
    }

    const percentual_coelhos = (qtd_coelhos / qtd_cobaias) * 100
    const percentual_ratos = (qtd_ratos / qtd_cobaias) * 100
    const percentual_sapos = (qtd_sapos / qtd_cobaias) * 100


    console.log(`Total: ${qtd_cobaias} cobaias`)
    console.log(`Total de coelhos: ${qtd_coelhos}`)
    console.log(`Total de ratos: ${qtd_ratos}`)
    console.log(`Total de sapos: ${qtd_sapos}`)
    console.log(`Percentual de coelhos: ${percentual_coelhos.toFixed(2)}%`)
    console.log(`Percentual de ratos: ${percentual_ratos.toFixed(2)}%`)
    console.log(`Percentual de sapos: ${percentual_sapos.toFixed(2)}%`)

}
main()