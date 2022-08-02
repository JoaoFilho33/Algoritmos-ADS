import fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

export function loadfile_partidos(){
    try{
        const data = fs.readFileSync('partidos_coligacoes_the_2012.csv', 'utf-8')
        const palavras_carregadas = data.split('\n')
        return palavras_carregadas
    } catch (error){
        console.error(error)
    }
}

export function inserir(vetor){
    vetor[vetor.length] = adicionar_veiculo()

    return vetor
}

function adicionar_veiculo(){
    const marca = input('Marca do veículo: ')
    const nome = input('Nome do veículo: ')
    const ano = Number(input('Ano do veículo: '))
    const cor = input('Cor do veículo: ')

    return [marca, nome, ano, cor]
}