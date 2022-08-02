import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num_de_casos = Number(input('Numero de casos'))

    const sequencia_fibonacci = fibonacci()
    let caso
    let count = 0
    let j = 1
    while(count < num_de_casos){
        caso = Number(input(`Caso [${count}]: `))
        console.log(`Fib(${caso}) = ${sequencia_fibonacci[caso]}`)
        count++
        j++
    }

}
function fibonacci(){
    const vetor = [0, 1]
    const tamanho = 64
    let count = 2
    let i = 1

    while(count < tamanho){
        vetor[count] = vetor[i] + vetor[i-1]
        i++
        count++
    }
    return vetor
}

main()