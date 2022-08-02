export function new_matriz(linhas, colunas){
    const matriz = [linhas]
    for(let i = 0; i < linhas; i++){
        matriz[i] = [colunas]
    }
    return matriz
}

export function transpor_matriz(matriz, ordem){
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

export function numeros_aleatorios(min = 0, max = 50){
    return Math.floor(Math.random() * (max-min)) + min
}