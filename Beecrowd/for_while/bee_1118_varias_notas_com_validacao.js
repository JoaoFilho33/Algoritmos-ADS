import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let nota = 0
    let validacao = 0
    let soma = 0
    let continua = 0
    let media = 0
    

    while (continua !== 2) {
        while (validacao < 2) {
            nota = Number(input('Nota: '))

            if (pertence_ao_intervalo(nota)) {
                validacao++
                soma += nota
            }
            else {
                console.log('nota invalida')
            }
        }
        continua = 0
        media = soma / 2
        console.log(`media = ${media.toFixed(2)}`)


        while (continua !== 1 && continua !== 2) {
            continua = Number(input('novo calculo (1-sim 2-nao): '))
            count++
        }
        media = 0
        soma = 0
        validacao = 0
    }

}
function pertence_ao_intervalo(nota) {
    return nota >= 1 && nota <= 10
}


main()