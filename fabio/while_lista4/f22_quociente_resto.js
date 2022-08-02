import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const num1 = Number(input('Num1: '))
    const num2 = Number(input('Num2: '))

    const divisao = quociente(num1, num2)


    const resto = num1 - (divisao * num2)

    console.log(`Resto: ${resto}`)
    console.log(`Quociente: ${divisao}`)

}

function quociente(num1, num2) {
    let count = 1
    while (count * num2 < num1) {
        count++
    }
    return count - 1
}


main()