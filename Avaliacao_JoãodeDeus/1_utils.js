import { show_menu } from './menu_utils.js'
import { new_vetor } from './vetor_utils.js'
import {
    input_numero, input_numero_negativo, input_numero_positivo,
    input_valor_nao_nulo, input_valor_maior_que_faixa, input_valor_menor_que_faixa,
    input_valor_entre_a_faixa, input_valor_texto, input_texto_de_tamanho_min,
    input_texto_de_tamanho_max, input_texto_entre_faixa, input_texto_com_maximo_de_palavras,
    input_texto_com_minimo_de_palavras, input_e_validacao_de_data
} from './funcoes_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main() {
    show_menu()
    let vetor, texto

    let opcao_menu = input('Opção: ')

    while (opcao_menu !== '0') {

        if (opcao_menu === 'a') {
            console.clear()
            const tamanho = Number(input('Tamanho do vetor: '))
            vetor = new_vetor(tamanho)

            for (let i = 0; i < vetor.length; i++) {
                vetor[i] = input_numero()
            }
        }
        else if (opcao_menu === 'b') {
            console.clear()
            const tamanho = Number(input('Tamanho do vetor: '))
            vetor = new_vetor(tamanho)

            for (let i = 0; i < vetor.length; i++) {
                vetor[i] = input_numero_positivo()
            }
        }
        else if (opcao_menu === 'c') {
            console.clear()
            const tamanho = Number(input('Tamanho do vetor: '))
            vetor = new_vetor(tamanho)

            for (let i = 0; i < vetor.length; i++) {
                vetor[i] = input_numero_negativo()
            }
        }
        else if (opcao_menu === 'd') {
            console.clear()
            const tamanho = Number(input('Tamanho do vetor: '))
            vetor = new_vetor(tamanho)

            for (let i = 0; i < vetor.length; i++) {
                vetor[i] = input_valor_nao_nulo()
            }
        }
        else if (opcao_menu === 'e') {
            console.clear()
            const tamanho = Number(input('Tamanho do vetor: '))
            const min = Number(input('Valor mínimo para o vetor: '))
            vetor = new_vetor(tamanho)

            for (let i = 0; i < vetor.length; i++) {
                vetor[i] = input_valor_maior_que_faixa(min)
            }
        }
        else if (opcao_menu === 'f') {
            console.clear()
            const tamanho = Number(input('Tamanho do vetor: '))
            const max = Number(input('Valor máximo para o vetor: '))
            vetor = new_vetor(tamanho)

            for (let i = 0; i < vetor.length; i++) {
                vetor[i] = input_valor_menor_que_faixa(max)
            }
        }
        else if (opcao_menu === 'g') {
            console.clear()
            const tamanho = Number(input('Tamanho do vetor: '))
            const min = Number(input('Valos mínimo para o vetor: '))
            const max = Number(input('Valor máximo para o vetor: '))
            vetor = new_vetor(tamanho)

            for (let i = 0; i < vetor.length; i++) {
                vetor[i] = input_valor_entre_a_faixa(min, max)
            }
        }
        else if (opcao_menu === 'h') {
            console.clear()
            texto = input_valor_texto()
            console.log(texto)
            input('<enter> to continue')
        }
        else if(opcao_menu === 'i'){
            console.clear()
            const min = Number(input('Tamanho mínimo para o texto: '))
            texto = input_texto_de_tamanho_min(min)
            console.log(texto)
            input('<enter> to continue')
        }
        else if(opcao_menu === 'j'){
            console.clear()
            const max = Number(input('Tamanho máximo para o texto: '))

            texto = input_texto_de_tamanho_max(max)
            console.log(texto)
            input('<enter> to continue')
        }
        else if(opcao_menu === 'k'){
            console.clear()
            const min = Number(input('Tamanho mínimo para o texto: '))
            const max = Number(input('Tamanho máximo para o texto: '))

            texto = input_texto_entre_faixa(min, max)
            console.log(texto)
            input('<enter> to continue')
        }
        else if(opcao_menu === 'l'){
            console.clear()
            const max = Number(input('Tamanho máximo de PALAVRAS: '))

            texto = input_texto_com_maximo_de_palavras(max)
            console.log(texto)
            input('<enter> to continue')
        }
        else if(opcao_menu === 'm'){
            console.clear()
            const min = Number(input('Tamanho mínimo de Palavras: '))

            texto = input_texto_com_minimo_de_palavras(min)
            console.log(texto)
            input('<enter> to continue')
        }
        else if(opcao_menu === 'n'){
            console.clear()
            
        }
        else if(opcao_menu === 'o'){
            console.clear()
            const data = input_e_validacao_de_data()

            console.log(data)
            input('<enter> to continue')
        }
        else {
            console.log('Informe uma opção dentro da faixa de opções')
            input('<enter> to continue')
        }
        console.clear()
        show_menu()
        opcao_menu = input('Opção: ')
    }
}


main()