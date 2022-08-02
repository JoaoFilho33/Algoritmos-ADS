import fs from 'fs'
var input = fs.readFileSync('1181.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const matriz = montar_matriz(12, 12) 
    
    const linha = Number(lines[0])
    const tipo_operacao = lines[1]
    let count = 2

    for(let linha1 = 0; linha1 < 12; linha1++){
        for(let coluna = 0; coluna < 12; coluna++){
            matriz[linha1][coluna] = Number(lines[count])
            count++
        }
    }

    
    if(tipo_operacao === 'S'){
        const soma = calcular_soma(matriz, linha)
        console.log(soma.toFixed(1))
    }
    else if(tipo_operacao === 'M'){
        const media = calcular_media(matriz, linha)
        console.log(media.toFixed(1))
    }

}
function montar_matriz(linhas, colunas){
    const matriz = Array(linhas)
    for(let i = 0; i < colunas; i++){
        matriz[i] = Array(colunas)
    }
    return matriz
}

function calcular_soma(matriz, linha){
    let soma = 0

    for(let i = 0; i < 12; i++){
        soma += matriz[linha][i]
    }
    return soma
}

function calcular_media(matriz, linha){
    let soma = 0

    for(let i = 0; i < 12; i++){
        soma += matriz[linha][i]
    }

    return soma / 12
} 


main()