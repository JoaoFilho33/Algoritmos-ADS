import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num1 = Number(input('Número 1: '))
    const num2 = Number(input('Número 2: '))

    let candidato_a_mmc = 1

    while(!(candidato_a_mmc % num1 === 0 && candidato_a_mmc % num2 ===0)){
        candidato_a_mmc++
    }
    console.log(candidato_a_mmc)

}
main()
