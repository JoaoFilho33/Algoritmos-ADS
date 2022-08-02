import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const vetor = Array()

    for (let i = 0; i < 2; i++) {
        vetor[i] = input(`Binario na posição ${i}: `)
    }

    let decimal = []
    let hexadecimal = []
    let count = 0
    while (count < vetor.length) {
        decimal[count] = converter_binario_em_decimal(vetor[count])
        count++
    }

    let i = 0
    while (i < vetor.length) {
        hexadecimal[i] = converter_binario_em_hexadecimal(vetor[i])
        i++
    }


    console.log(`Decimal: ${decimal}`)
    console.log(`Hexadecimal: ${hexadecimal}`)

}
//deve-se usar na função apenas o indice do vetor desejado 
//nesse caso chega na função o vetor[i]
function converter_binario_em_decimal(vetor) {
    const vetor2 = vetor.split('').map(Number)
    let decimal = 0

    for (let i = 0; i < vetor2.length; i++) {
        if (vetor2[i] === 1) {
            decimal += 2 ** [i]
        }
    }
    return decimal
}

function converter_binario_em_hexadecimal(vetor) {
    const vetor2 = vetor.split('').map(Number)
    let new_vetor = []
    let hexadecimal = []
    let count = 0
    let j = 0

    for (let i = 0; i < vetor2.length; i++) {
        new_vetor[i] = vetor2[i]
        if (i % 4 === 0) {
            while (count < new_vetor) {
                hexadecimal[i] = converter_binario_em_decimal(new_vetor)
                count++
            }
            new_vetor = []
            count = 0
        }
        else {
            while (j < new_vetor) {
                hexadecimal[i] = converter_binario_em_decimal(new_vetor)
                j++
            }
        }
    }
    return hexadecimal
}


main()