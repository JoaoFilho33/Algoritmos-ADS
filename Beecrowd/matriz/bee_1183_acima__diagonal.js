import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const matriz = montar_matriz(12, 12)    

    const tipo_operacao = input('Operação: ')

    for(let linha = 0; linha < 12; linha++){
        for(let coluna = 0; coluna < 12; coluna++){
            matriz[linha][coluna] = Number(input('> '))
        }
    }

    let soma
    let media
    if(tipo_operacao === 'S'){
        soma = calcular_soma(matriz)
        console.log(soma.toFixed(1))
    }
}
function montar_matriz(linhas, colunas){
    const matriz = Array(linhas)
    for(let i = 0; i < colunas; i++){
        matriz[i] = Array(colunas)
    }
    return matriz
}

function calcular_soma(matriz){
    let soma = 0
    for(let linha = 0; linha < 12; linha++){
        for(let coluna = 1; coluna < 12; coluna++){
            soma += matriz[linha][coluna]
        }
    }
    return soma
}

main()