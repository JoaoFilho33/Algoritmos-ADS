import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const binario = input('Binário: ').split('')
    const binario_number = binario.map(Number)
    let decimal = 0

    let count = 0
    let indice = binario.length-1
    while (count < binario.length) {
        decimal += converter_binario(binario_number[count], indice)
        console.log(decimal)
        count++
        indice--
    }


    console.log(`Decimal: ${decimal}`)
}

function converter_binario(numero, i){
    return (numero*2)**i
}


main()