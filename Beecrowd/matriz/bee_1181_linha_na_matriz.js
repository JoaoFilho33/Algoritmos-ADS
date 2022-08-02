import fs from 'fs'
var input = fs.readFileSync('1181.txt', 'utf8');
var lines = input.split('\n');
function main(){
    const matriz = montar_matriz(12, 12) 
    
    const linha = Number(input('Linha para operação: '))
    const tipo_operacao = input('Operação (S ou M): ')

   
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            matriz[i][j] = Number(input('> '))
        }
    }

    let soma
    let media
    if(tipo_operacao === ' S'){
        soma = calcular_soma(matriz, linha)
        console.log(soma.toFixed(1))
    }
    else if(tipo_operacao === 'M'){
        media = calcular_media(matriz, linha)
        console.log(media.toFixed(1))
    }

}
function montar_matriz(linhas, colunas){
    const matriz = [linhas]
    for(let i = 0; i < colunas; i++){
        matriz[i] = [colunas]
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