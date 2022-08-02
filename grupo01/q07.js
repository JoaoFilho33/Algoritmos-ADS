import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\t**** EMPRÉSTIMO ****')
    const renda = Number(input('Informe sua renda mensal: '))
    const emprestimo =  Number(input('Informe o valor do empréstimo: '))
    const prazo = Number(input('Informe o prazo do parcelamento: '))

    const dias_prazo = prazo * 30
    const iof = (emprestimo * 0.0038) + dias_prazo * 0.0082
    const selic = 
    console.log(`O valor do IOF é: ${iof.toFixed(3)}`)

    if(prazo < 2){
        console.log('O prazo pedido não é válido.')
    }
    else if(prazo >= 2 && prazo <= 6){
        const juros = (0.1275 * emprestimo) * 0.5
        const total = juros + emprestimo
        const valor_parcela = total / prazo
        console.log('\n**** CAMPO CALCULO ****')
        console.log(`Você pagará um juros de R$ ${juros.toFixed(2)}`)
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`)
        console.log(`Valor da parcela: R$ ${valor_parcela.toFixed(2)}`)
       }
    else if(prazo > 6 && prazo <= 12){
        const juros = (0.1275 * emprestimo) * 0.75
        const total = juros + emprestimo
        const valor_parcela = total / prazo
        console.log('\n**** CAMPO CALCULO ****')
        console.log(`Você pagará um juros de R$ ${juros.toFixed(2)}`)
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`)
        console.log(`Valor da parcela: R$ ${valor_parcela.toFixed(2)}`)
       }



}
main()