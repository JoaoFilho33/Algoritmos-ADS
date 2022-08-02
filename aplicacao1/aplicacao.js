import { 
    criar_vetor_automático, criar_vetor_manual,
    loadfile_arquivo, novo_vetor_padrao,
    maior_elemento, menor_elemento,
    calcular_media, soma_vetor,
    get_positivos_quantidade, get_negativos_quantidade,
    multiplicar_vetor, elevar_vetor, reduzir_vetor_a_uma_fracao,
    substituir_negativos_por_aleatorios, inverter_vetor,
    embaralhar_vetor, adicionar_novos_elementos,
    remover_itens_por_valor, remover_item_da_posicao,
    editar_valor_da_pos,
    new_vetor
} from './funcoes_utils.js'
import{ 
    mostrar_menu, mostrar_submenu1,
    mostrar_submenu2, criar_e_salvar_em_arquivo,
    auto_save
} from './utils.js'
import {
    input, input_number
} from './io_utils.js'

function main(){

    mostrar_menu()
    let opcao_menu = input('Opção: ')
    let opcao_submenu1, opcao_submenu2, tamanho, minimo, maximo, nome_do_arquivo, vetor, valor_padrao
    let maior, pos_maior, menor, pos_menor, media, positivos, qtd_positivos, negativos, qtd_negativos
    let soma
    
    console.clear()
    while(opcao_menu !== '0'){

        if(opcao_menu === 'i'){
            input('<enter> para continuar')
            console.clear()
            mostrar_submenu1()
            opcao_submenu1 = Number(input('>'))
            if(opcao_submenu1 === 1){
                console.clear()
                tamanho = Number(input('Tamanho do vetor: '))
                minimo = Number(input('Valor mínimo: '))
                maximo = Number(input('Valor máximo: '))
                vetor = criar_vetor_automático(tamanho, minimo, maximo)
            }
            else if(opcao_submenu1 === 2){
                console.clear()
                tamanho = Number(input('Tamanho do vetor: '))
                minimo = Number(input('Valor mínimo: '))
                maximo = Number(input('Valor máximo: '))
                vetor = new_vetor(tamanho)

                for(let i = 0; i < vetor.length; i++){
                    vetor[i] = input_number(minimo, maximo)
                }
            }
            else if(opcao_submenu1 === 3){
                console.clear()
                nome_do_arquivo = input('Nome do arquivo: ')
                vetor = loadfile_arquivo(nome_do_arquivo)
            } 
        }
        else if(opcao_menu === 'ii'){
            console.clear()
            console.log(vetor)
        }
        else if(opcao_menu === 'iii'){
            valor_padrao = Number(input('Valor padrão: '))
            vetor = novo_vetor_padrao(tamanho, valor_padrao)
        }
        else if(opcao_menu === 'iv'){
            console.log(`Tamanho do vetor: ${vetor.length}`)
        }
        else if(opcao_menu === 'v'){
            maior = maior_elemento(vetor)[0]
            pos_maior = maior_elemento(vetor)[1]
            menor = menor_elemento(vetor)[0]
            pos_menor = menor_elemento(vetor)[1]
            console.clear()
            console.log(`Maior elemento: ${maior}`)
            console.log(`Posição: ${pos_maior}`)
            console.log(`Menor elemento: ${menor}`)
            console.log(`Posição: ${pos_menor}`)
        }
        else if(opcao_menu === 'vi'){
            console.clear()
            media = calcular_media(vetor)
            console.log(media)
        }
        else if(opcao_menu === 'vii'){
            console.clear()
            soma = soma_vetor(vetor)
            console.log(soma)
        }
        else if(opcao_menu === 'viii'){
            console.clear()
            positivos = get_positivos_quantidade(vetor)[0]
            qtd_positivos = get_positivos_quantidade(vetor)[1]
            console.clear()
            console.log(`Positivos: ${positivos}`) 
            console.log(`Quantidade: ${qtd_positivos}`) 
        }
        else if(opcao_menu === 'ix'){
            console.clear()
            negativos = get_negativos_quantidade(vetor)[0]
            qtd_negativos = get_negativos_quantidade(vetor)[1]
            console.clear()
            console.log(`Negativos: ${negativos}`) 
            console.log(`Quantidade: ${qtd_negativos}`) 
        }
        else if(opcao_menu === 'x'){
            input('<enter> para continuar')
            console.clear()
            mostrar_submenu2()
            opcao_submenu2 = Number(input('> '))
            if(opcao_submenu2 === 1){
                console.clear()
                const valor = Number(input('Multiplicar todo o vetor por: '))
                vetor = multiplicar_vetor(vetor, valor)
                console.log(vetor)
            }
            else if(opcao_submenu2 === 2){
                console.clear()
                const valor = Number(input('Elevar a: '))
                vetor = elevar_vetor(vetor, valor)
                console.log(vetor)
            }
            else if(opcao_submenu2 === 3){
                console.clear()
                const valor = input('Reduzir a uma fração de: ')
                const fracao = valor.split('/').map(Number)
                vetor = reduzir_vetor_a_uma_fracao(vetor, fracao)
                console.log(vetor)
            }
            else if(opcao_submenu2 === 4){
                console.clear()
                const min = Number(input('Mínimo: '))
                const max = Number(input('Máximo: ')) 
                vetor = substituir_negativos_por_aleatorios(vetor, min, max)
                console.log(vetor)
            }
            else if(opcao_submenu2 === 5){
                console.clear()
                vetor = inverter_vetor(vetor)
            }
            else if(opcao_submenu2 === 6){
                console.clear()
                vetor = embaralhar_vetor(vetor)
            }else{
                console.log('Opção invalida')
            }
        }
        else if(opcao_menu === 'xi'){
            console.clear()
            const qtd_valores = Number(input('Quantidade de valores para inserir: '))
            vetor = adicionar_novos_elementos(vetor, qtd_valores)
            console.log(vetor)
        }
        else if(opcao_menu === 'xii'){
            console.clear()
            const itens = input('Remover os itens: ')
            const itens_num = itens.split(' ').map(Number)
            console.log(itens_num)
            vetor = remover_itens_por_valor(vetor, itens_num)
            console.log(vetor)
        }
        else if(opcao_menu === 'xiii'){
            console.clear()
            const posicao = Number(input('Remover o item da posição: '))
            vetor = remover_item_da_posicao(vetor, posicao)
            console.log(vetor)
        }
        else if(opcao_menu === 'xiv'){
            console.clear()
            const posicao = Number(input('Editar o valor da posição: '))
            vetor = editar_valor_da_pos(vetor, posicao)
            console.log(vetor)
        }
        else if(opcao_menu === 'xv'){
            console.clear()
                console.clear()

                console.log('Por favor, informe o nome do arquivo a ser criado')
                const arquivo = input('Salvar no arquivo: ')

                const criar_salvar = criar_e_salvar_em_arquivo(vetor, arquivo)
        }
        else if(opcao_menu === 'xvi'){
            const autosave = auto_save(vetor)
            break
        }else{
            console.log('Informe uma opção válida')
        }
        input('<enter> to continue')
        console.clear()

        mostrar_menu()
        opcao_menu = input('opção: ')
    }

}

main()
