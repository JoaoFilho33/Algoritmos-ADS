import fs from 'fs'
var input = fs.readFileSync('1183.txt', 'utf8');
var lines = input.split('\n');

function main() {
    const matriz = montar_matriz(12, 12)

    const tipo_operacao = lines[0]

    let count = 1
    for (let linha = 0; linha < 12; linha++) {
        for (let coluna = 0; coluna < 12; coluna++) {
            matriz[linha][coluna] = Number(lines[count])
            count++
        }
    }

    let soma
    let media
    if (tipo_operacao === 'S') {
        soma = calcular_soma(matriz)
        console.log(soma.toFixed(1))
    }
    else if(tipo_operacao === 'M'){
        media = calcular_media(matriz)
        console.log(media.toFixed(1))
    }
}
function montar_matriz(linhas, colunas) {
    const matriz = Array(linhas)
    for (let i = 0; i < colunas; i++) {
        matriz[i] = Array(colunas)
    }
    return matriz
}

function calcular_soma(matriz) {
    let soma = 0
    for (let linha = 11; linha >= 0; linha--) {
        for (let coluna = linha - 1; coluna >= 0; coluna--) {
                soma += matriz[linha][coluna]
        }
    }
    return soma
}

function calcular_media(matriz){
    let soma = 0
    let count = 0
    for(let linha = 11; linha >= 0; linha--){
        for(let coluna = linha - 1; coluna >= 0; coluna--){
            soma += matriz[linha][coluna]
            count++
        }
    }
    return soma/count

}


main()