import fs from 'fs'
var input = fs.readFileSync('1185.txt', 'utf8');
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
    let i = 11
    for (let linha = 0; linha < 11; linha++) {
        for (let coluna = 0; coluna < i; coluna++) {
                soma += matriz[linha][coluna]
        }
        i--
    }
    return soma
}

function calcular_media(matriz){
    let soma = 0
    let count = 0
    let i = 11
    for(let linha = 0; linha < 11; linha++){
        for(let coluna = 0; coluna < i; coluna++){
            soma += matriz[linha][coluna]
            count++
        }
        i--
    }
    return soma/count

}


main()