import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const elementos = input('Elementos: ').split('')
    let vetorA = Array()

    for (let i = 0; i < elementos.length; i++) {
        vetorA[i] = elementos[i]
    }

    const repetidos = se_existem_valores_iguais(vetorA)

    console.log(`${repetidos}`)

}

function se_existem_valores_iguais(vetor){
    let elemento
    let count_repetidos = 1
    for(let i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        for(let j = 1; j < vetor.length; j++){
            if(elemento === vetor[j]){
                count_repetidos++
            }
        }
    }
    if(count_repetidos > 1){
        return 'Existe(m) elemento(s) iguais'
    }
    else{
        return 'Não existe(m) elemento(s) iguais'
    }
}

main()