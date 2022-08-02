import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const linhas = Number(input('Numero de linhas: '))
    const colunas = Number(input('Numero de colunas: '))
    const matriz = new_matriz(linhas, colunas)    

    for(let i = 0; i < matriz; i++){
        for(let j = 0; j < 2; j++){
            matriz[i][j] = Number(input('> '))
        }
    }

    console.table(matriz)

}
function new_matriz(linhas, colunas){
    const matriz = [linhas]

    for(let i =  0; i < colunas; i++){
        matriz[i] = [colunas]
    }

    return matriz
}


main()