import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let numero = 1
    let count = 0
    let operacao 

    console.log('**Tabuada 1 ao 10**')
    while (numero <= 10) {
        operacao = numero * count
        console.log(`${numero} * ${count} = ${operacao}`)
        count++
        if(count > 10){
            numero++
            if(numero>10){
                break
            }
            console.log(`**Tabuada do ${numero}**`)
            count = 0
        }
    }
}


main()