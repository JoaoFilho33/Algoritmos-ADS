import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let salario = 0
    let num_filhos = 0
    let soma_salario = 0

    let count = 0
    let count_salario = 0

    while (count < 4) {
        salario = Number(input('Salário: '))
        if (salario === 0) {
            break
        }
        num_filhos += Number(input('Número de filhos: '))

        soma_salario += salario


        if (salario <= 1000) {
            count_salario++
        }

        count++
    }

    const media_salario = soma_salario / count
    const media_filhos = num_filhos / count

    const percentual_salario_ate_100 = (count_salario * 100) / count

    console.log(`Media salarial: R$ ${media_salario}`)
    console.log(`Media número de filhos: ${media_filhos}`)
    console.log(`Percentual de pessoas que recebem até R$ 1000,00: ${percentual_salario_ate_100.toFixed(0)}%`)



}


main()