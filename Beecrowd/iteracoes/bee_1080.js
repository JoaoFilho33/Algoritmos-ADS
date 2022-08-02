import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let maior = 0
    let posicao_maior = 0
    let contador = 0

    while(!(contador === 5)){
    for(let indice in numeros){
        if(numeros[indice] > maior)
        maior = numeros[indice]
        posicao_maior = indice
        contador ++
    }
}
    let posicao = Number(posicao_maior) + 1
    console.log(maior)
    console.log(posicao)
}
main()