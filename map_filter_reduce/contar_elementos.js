import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const ordem = Number(input('Ordem da matiz: '))
    const matriz = montar_matriz(ordem)    

    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            matriz[i][j] = Number(input('Numero: '))
        }
    }




}
function montar_matriz(ordem){
    const matriz = [ordem]
    for(let i = 0; i < ordem; i++){
        matriz[i] = [ordem]
    }
    return matriz
}

function elementos_repetidos(matriz, ordem){
    const vetor = []
    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            if(matriz[i][j] === matriz[i][k]){
                
            }
        }
    }
}


main()