import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const ordem = Number(input('Ordem: '))
    const matriz = montar_matriz(ordem, ordem)

    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            matriz[i][j] = numeros_aleatorios()
        }
    }

    const matriz_trasnposta = transpor_matriz(matriz, ordem)

    console.table(matriz)
    console.table(matriz_trasnposta)
    

}
function montar_matriz(linhas, colunas){
    const matriz = [linhas]
    for(let i = 0; i < linhas; i++){
        matriz[i] = [colunas]
    }
    return matriz
}

function transpor_matriz(matriz, ordem){
    const matriz_transposta = montar_matriz(ordem, ordem)
    const linhas = matriz[0].length
    const colunas = matriz.length

    for(let i = 0; i < linhas; i++){
        for(let j = 0; j < colunas; j++){
            matriz_transposta[i][j] = matriz[j][i]
        }
    }

    return matriz_transposta
}

function numeros_aleatorios(min = 0, max = 50){
    return Math.floor(Math.random() * (max-min)) + min
}
main()