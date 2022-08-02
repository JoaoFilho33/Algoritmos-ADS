import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let vetor = []
    for (let i = 0; i < 20; i++) {
        vetor[i] = Number(input('Valor: '))
    }

    const vetor_invertido = inveter_vetor(vetor)

    for (let i = 0; i < vetor_invertido.length; i++) {
        console.log(`N[${i}] = ${vetor_invertido[i]}`)
    }

}

function inveter_vetor(vetor) {
    let vetor_invertido = []
    for (let i = 0, j = vetor.length - 1; i < vetor.length; i++, j--) {
        vetor_invertido[i] = vetor[j]
        vetor_invertido[j] = vetor[i]
    }
    return vetor_invertido
}


main()