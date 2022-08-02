import fs from 'fs'
var input = fs.readFileSync('1117.txt', 'utf8');
var lines = input.split('\n');
function main() {
    let nota = 0
    let validacao = 0
    let soma = 0
    let media = 0

    let count = 0
    while (validacao < 2) {
        nota = Number(lines[count])
        if (pertence_ao_intervalo(nota)) {
            validacao++
            soma += nota
        }
        if (!pertence_ao_intervalo(nota)) {
            console.log('nota invalida')
        }
        count++
    }

    media = soma / 2
    console.log(`media = ${media.toFixed(2)}`)


}
function pertence_ao_intervalo(nota) {
    return nota >= 0 && nota <= 10
}


main()