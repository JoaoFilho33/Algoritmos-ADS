import { eh_par_ou_nulo } from './vetor_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const elementos = Number(input('Os vetores devem ter quantos elementos? '))
    let vetorA = Array()
    let vetorB = Array()

    let vetorC = Array()
    let vetorD = Array()

    for (let i = 0; i < elementos; i++) {
        vetorA[i] = input(`Inserir vetor A: `)
    }
    for (let i = 0; i < elementos; i++) {
        vetorB[i] = input('Inserir vetor B: ')
    }

    let count = 0
    let count2 = 0
    let j = 0
    let i = 0
    let k = 0
    while (count < elementos) {

        while (count2 < elementos * 2) {
            if (eh_par_ou_nulo(count2)) {
                vetorC[count2] = vetorA[i]
                i++
            }
            else {
                vetorC[count2] = vetorB[k]
                k++
            }
            count2++

        }

        for (let i = 0; i < elementos; i++) {
            if (vetorA[count] === vetorB[i]) {
                vetorD[j] = vetorA[count]
                j++
            }
        }

        count++
    }


    console.log(`União: ${vetorC.join(' ')}`)
    console.log(`Interseção: ${vetorD.join(' ')}`)
}

main()