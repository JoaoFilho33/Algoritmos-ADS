import fs from 'fs'
var input = fs.readFileSync('1180.txt', 'utf8');
var lines = input.split('\n');

function main() {
    const tamanho = Number(lines[0])
    const valores = lines[1].split(' ').map(Number)

    const vetor = new Array(tamanho)
    for (let i = 0; i < valores.length; i++) {
        vetor[i] = valores[i]
    }

    const [menor, posicao] = menor_elemento(vetor)

    console.log(`Menor valor: ${menor}`)
    console.log(`Posição: ${posicao}`)
}

function menor_elemento(vetor) {
    let menor = 1000
    let pos_menor = 0
    let count = 0

    while (count < vetor.length) {
        if (vetor[count] < menor) {
            menor = vetor[count]
            pos_menor = count
        }
        count++
    }
    return [menor, pos_menor]
}
main()
