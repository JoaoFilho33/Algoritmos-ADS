import fs from 'fs'
var input = fs.readFileSync('bolha.txt', 'utf8');
var lines = input.split('\n');
function main() {
    const vetor = lines[0].split(' ')
    const vetor1 = vetor


    let vetor2 = vetor1.map(Number)
    let auxiliar

    let count = 0
    let j = 0
    for (let i = 0; i < vetor2.length - 1; i++) {
        if (vetor2[i] > vetor2[i + 1]) {
            auxiliar = vetor2[i]
            vetor2[i] = vetor2[i + 1]
            vetor2[i + 1] = auxiliar

        }
    }

   
        console.log(vetor2[0])
        console.log(vetor2[1])
        console.log(vetor2[2])
        console.log('')
        console.log(vetor1[0])
        console.log(vetor1[1])
        console.log(vetor1[2])
}


main()