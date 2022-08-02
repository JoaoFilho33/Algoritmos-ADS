import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let valores
    let m = 1
    let n = 1
    let vetor = new Array()
    let soma = 0

    while (m > 0 || n > 0) {
        valores = input(': ').split(' ')
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
        console.log(`${vetor.join(' ')} Sum=${soma}`)
        if (soma > 0) {
            vetor = new Array()
            soma = 0
        }
    }

}
main()