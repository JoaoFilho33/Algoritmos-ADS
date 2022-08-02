import fs from 'fs'
import { input } from './io_utils'
export function mostrar_menu(){

    let menu = '\t***OPÇÕES DE VETOR****'
    menu += '\ni - Inicializar vetor numérico'
    menu += '\nii - Mostrar todos os valores'
    menu += '\niii - Rezetar vetor'
    menu += '\niv - Ver quantidade de itens no vetor'
    menu += '\nv - Ver menor e maior valor e sua posição'
    menu += '\nvi - Media dos valores'
    menu += '\nvii - Somatório dos valores'
    menu += '\nviii - Mostrar valores positivos e quantidade'
    menu += '\nviii - Mostrar valores positivos e quantidade'
    menu += '\nix - Mostrar valores negativos e quantidade'
    menu += '\nx - Atualizar todos os valores (seguindo regras)'
    menu += '\nxi - Adicionar novos valores'
    menu += '\nxii - Remover Itens por Valor exato'
    menu += '\nxiii - Remover por Posição'
    menu += '\nxiv - Editar valor específico por Posição'
    menu += '\nxv - Salvar valores em um arquivo'
    menu += '\nxvi - Salvar e sair'

    menu += '\n0 - sair'

    console.log(menu)
}

export function mostrar_submenu1(){
    let menu = '\t***submenu***'
    menu += '\n1 - Valores automáticos'
    menu += '\n2 - Escrever valores manualmente'
    menu += '\n3 - Carregar valor de arquivo externo'
    
    menu += '\n0 - sair'
    console.log(menu)
}

export function mostrar_submenu2(){
    let menu = '\t****submenu****'
    menu += '\n1 - Multiplicar por um valor'
    menu += '\n2 - Elevar a um valor (exponenciação)'
    menu += '\n3 - Reduzir a uma fracao (EX: 1/5)'
    menu += '\n4 - Substituir valores negativos por números aleatórios da faixa(min, max)'
    menu += '\n5 - Inverter Vetor'
    menu += '\n6 - Embaralhar valores'

    menu += '\n0 - sair'
    console.log(menu)
}

export function criar_e_salvar_em_arquivo(elementos, nome_do_arquivo){
    const string = elementos.join('\n')
    fs.writeFileSync(`${nome_do_arquivo}.txt`, string, 'utf-8')
}

export function auto_save(elementos){
    const string = elementos.join('\n')
    fs.writeFileSync('autosave.txt', string, 'utf-8')
}

export function input_numero_positivo(){
    let numero_positivo

    while(numero_positivo < 0){
        numero_positivo = Number(input('Informe um número positivo: '))
    }

    return numero_positivo
}

