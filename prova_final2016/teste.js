import {
    show_menu, show_informacoes_inserir
} from './utils.js'
import { inserir } from './funcoes_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let linha
    let matriz = new_matriz(ordem, ordem)
    let submenu

    show_menu()
    let opcao_menu = Number(input('Opção: '))
    while(opcao_menu !== 0){

        if (opcao_menu === 1) {
            show_informacoes_inserir()
            linha = 0
            matriz = new_matriz(linha)
            console.clear()
            for (let i = 0; i === ordem; i++) {
                for (let j = 0; j < 4; j++) {
                    matriz[i][j] = inserir(matriz[0])
                }
                ordem++
            }
        }
        else if(opcao_menu === 2){
            console.log(matriz)
            input('<enter> to continue')
        }
        input('<enter> to continue')
        console.clear()

        show_menu()
        opcao_menu = input('opção: ')
    }
    


}
function new_matriz(linhas, colunas) {
    const matriz = [linhas]
    for (let i = 0; i < colunas; i++) {
        matriz[i] = [colunas]
    }
    return matriz
}

main()