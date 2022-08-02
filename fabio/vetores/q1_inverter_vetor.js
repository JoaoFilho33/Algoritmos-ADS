import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const elementos = input('Elementos: ').split('')
    let vetorA = Array()
    let vetorB = []

    let count = elementos.length - 1


    for (let i = 0; i < elementos.length; i++) {
        vetorA[i] = elementos[i]
        vetorB[count] = vetorA[i]

        count--
    }


    console.log('Vetor A: ', vetorA.join(''))
    console.log('Vetor B: ', vetorB.join(''))


}
main()