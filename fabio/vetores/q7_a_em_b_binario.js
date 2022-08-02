import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const qtd_elementos = Number(input('Quantidades de elementos no vetor A: '))    

    const vetorA = Array()
    const vetorB = Array()
    let j = 0
    for (let i = 0; i < qtd_elementos; i++) {
        vetorA[i] = Number(input(`Vetor A na posição ${i}: `))
        if(index_vetorA_for_par(vetorA[i])){
            vetorB[j] = 1
        }
        else{
            vetorB[j] = 0
        }
        j++
    }

    console.log(`Vetor B: ${vetorB.join('')}`)

}

const index_vetorA_for_par = (valor) => valor % 2 === 0


main()