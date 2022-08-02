import fs from 'fs'
var input = fs.readFileSync('1091.txt', 'utf8');
var lines = input.split('\n');
function main() {
    let valores
    let m = 1
    let n = 1
    let vetor = new Array()
    let soma = 0

    let count = 0
    while ([m || n] > 0) {
        valores = lines[count].split(' ')
        m = Number(valores[0])
        n = Number(valores[1])
        if (m < n) {
            for (let i = m, j = 0; i <= n; i++, j++) {
                vetor[j] = i
                soma += i
            }
        }
        else {
            for (let i = n, j = 0; i <= m; i++, j++) {
                vetor[j] = i
                soma += i
            }
        }
        if (m > 0 && n > 0) {
            console.log(`${vetor.join(' ')} Sum=${soma}`)
        }
        if (soma > 0) {
            vetor = new Array()
            soma = 0
        }

        count++
    }

}
main()