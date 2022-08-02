import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let nota = 0
    let validacao = 0
    let soma = 0
    let media = 0

    while (validacao < 2) {
        nota = Number(input('Nota: '))
        if (pertence_ao_intervalo(nota)) {
            validacao++
            soma += nota
        }
        if (!pertence_ao_intervalo(nota)) {
            console.log('nota invalida')
        }
    }

    media = soma / 2
    console.log(`media = ${media.toFixed(2)}`)


}
function pertence_ao_intervalo(nota) {
    return nota >= 0 && nota <= 10
}


main()