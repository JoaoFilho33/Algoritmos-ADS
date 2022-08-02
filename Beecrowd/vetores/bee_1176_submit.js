import fs from 'fs'
var input = fs.readFileSync('1176.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const num_de_casos = Number(lines[0])

    const sequencia_fibonacci = fibonacci()
    let caso
    let count = 0
    let j = 1
    while(count < num_de_casos){
        caso = Number(lines[j])
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