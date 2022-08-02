import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const elementos = input('Elementos: ').split('')
    let vetorA = Array()
    let vetorB = Array()

    for (let i = 0; i < elementos.length; i++) {
        vetorA[i] = elementos[i]
        vetorB[i] = elementos[i]
    }

    let tamanhoVetor = vetorA.length
    let vetorC = Array(tamanhoVetor * 2)


    let i = 0
    let j = 0
    let k = 0
    while (i < elementos.length * 2) {
        if (eh_par_ou_nulo(i)) {
            vetorC[i] = vetorA[j]
            j++
        }
        else {
            vetorC[i] = vetorB[k]
            k++
        }
        i++
    }



    console.log(vetorA)
    console.log(vetorB)
    console.log(vetorC)

}
function eh_par_ou_nulo(count) {
    if (count === 0 || count % 2 === 0) {
        return true
    }
    return false
}



main()