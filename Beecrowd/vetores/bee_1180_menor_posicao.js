import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const tamanho = Number(input('Tamanho do vetor: '))    

    const vetor = []
    for(let i = 0; i < tamanho; i++){
        vetor[i] = Number(input('> '))
    }

    const [menor, posicao] = menor_elemento(vetor)

    console.log(`Menor valor: ${menor}`)
    console.log(`Posição: ${posicao}`)
}

function menor_elemento(vetor) {
    let menor = vetor[0]
    let pos_menor = 0
    let count = 0

    while (count < vetor.length) {
        if(vetor[count] <= menor){
            menor = vetor[count]
            pos_menor = count
        }
        count++
    }
    return [menor, pos_menor]
}
main()