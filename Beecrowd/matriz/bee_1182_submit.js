import fs from 'fs'
var input = fs.readFileSync('1182.txt', 'utf8');
var lines = input.split('\n');
    
function main(){
    const matriz = montar_matriz(12, 12) 
    
    const coluna = Number(lines[0])
    const tipo_operacao = lines[1]
    let count = 2

    for(let i = 0; i < 12; i++){
        for(let j = 0; j < 12; j++){
            matriz[i][j] = Number(lines[count])
            count++
        }
    }

    
    if(tipo_operacao === 'S'){
        const soma = calcular_soma(matriz, coluna)
        console.log(soma.toFixed(1))
    }
    else if(tipo_operacao === 'M'){
        const media = calcular_media(matriz, coluna)
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

function calcular_soma(matriz, coluna){
    let soma = 0

    for(let i = 0; i < 12; i++){
        soma += matriz[i][coluna]
    }
    return soma
}

function calcular_media(matriz, coluna){
    let soma = 0

    for(let i = 0; i < 12; i++){
        soma += matriz[i][coluna]
    }

    return soma / 12
} 

    
main()
