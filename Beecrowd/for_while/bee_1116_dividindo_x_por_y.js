import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const N = Number(input(': '))
    let valores
    let x
    let y
    let divisao

    for (let i = 0; i < N; i++) {
        valores = input('X Y: ').split(' ')
        x = Number(valores[0])
        y = Number(valores[1])
        divisao = x / y
        if (y === 0) {
            console.log('divisao impossivel')
        }
        else {
            console.log(divisao)
        }


    }
}


main()