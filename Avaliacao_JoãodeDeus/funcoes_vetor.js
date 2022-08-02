import { prompt } from 'prompt-sync'
const input = prompt()
import fs from 'fs'

export function new_vetor(tamanho, valor_padrao) {
    const vetor = new Array(tamanho).fill(valor_padrao)

    return vetor
}

export function especificacoes_do_vetor(tamanho, minimo, maximo) {

}


export function criar_vetor_automático(tamanho, minimo, maximo) {
    const vetor = new Array()
    let count = 0
    while (count < tamanho) {
        vetor[count] = random(minimo, maximo)
        count++
    }
    return vetor
    //console.log(vetor)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function criar_vetor_manual(tamanho, minimo, maximo) {
    const vetor = new Array()
    let count = 0

    while (count < tamanho) {
        vetor[count] = Number(input('valores> '))
        if (vetor[count] < minimo || vetor[count] > maximo) {
            return 'valor fora da faixa especificada'
        }
        count++
    }
    return vetor
    //console.log(vetor)   
}

export function loadfile_arquivo(nome_do_arquivo, tamanho) {
    const dados = fs.readFileSync(`${nome_do_arquivo}.txt`, 'utf8')
    const vetor = dados.split('\n').map(Number)

    //const vetor = new Array()
    /*let count = 0

    while(count < tamanho){
        vetor[count] = lines[count]
        
        count++
    }*/
    return vetor
}

export function novo_vetor_padrao(tamanho, valor_padrao) {
    const vetor = new Array(tamanho).fill(valor_padrao)

    return vetor
}

export function maior_elemento(vetor) {
    let maior = 0
    let pos_maior = 0
    let count = 0
    while (count < vetor.length) {
        if (vetor[count] > maior) {
            maior = vetor[count]
            pos_maior = count + 1
        }
        count++
    }
    return [maior, pos_maior]
}

export function menor_elemento(vetor) {
    let menor = vetor[0]
    let pos_menor = 0
    let count = 0

    while (count < vetor.length) {
        if (vetor[count] < menor) {
            menor = vetor[count]
            pos_menor = count + 1
        }
        count++
    }
    return [menor, pos_menor]
}

export function calcular_media(elementos) {
    let soma = 0
    let tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        soma += elementos[i]
    }

    return soma / tamanho
}

export function soma_vetor(elementos) {
    let soma = 0
    let tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        soma += elementos[i]
    }

    return soma
}

export function get_positivos_quantidade(elementos) {
    const positivos = []
    let quantidade = 0
    const tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        if (elementos[i] >= 0) {
            positivos[quantidade] = elementos[i]
            quantidade++
        }
    }

    return [positivos, quantidade]
}

export function get_negativos_quantidade(elementos) {
    const negativos = []
    let quantidade = 0
    const tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        if (elementos[i] < 0) {
            negativos[quantidade] = elementos[i]
            quantidade++
        }
    }

    return [negativos, quantidade]
}

export function multiplicar_vetor(elementos, valor) {
    const vetor = new_vetor(elementos.length)
    const tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        vetor[i] = elementos[i] * valor
    }

    return vetor
}

export function elevar_vetor(elementos, valor) {
    const vetor = new_vetor(elementos.length)
    const tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        vetor[i] = elementos[i] ** valor
    }

    return vetor
}

export function reduzir_vetor_a_uma_fracao(elementos, valores) {
    const vetor = new_vetor(elementos.length)
    const fracao = valores[0] / valores[1]
    const tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        vetor[i] = elementos[i] * fracao
    }

    return vetor
}

export function substituir_negativos_por_aleatorios(elementos, min, max) {
    const vetor = new_vetor(elementos.length)
    const tamanho = elementos.length

    for (let i = 0; i < tamanho; i++) {
        vetor[i] = elementos[i]
    }

    for (let j = 0; j < tamanho; j++) {
        if (vetor[j] < 0) {
            vetor[j] = random(min, max)
        }
    }

    return vetor
}

export function inverter_vetor(elementos) {
    const vetor = new_vetor(elementos.length)
    const tamanho = elementos.length

    for (let i = 0, j = tamanho - 1; i < tamanho; i++, j--) {
        vetor[i] = elementos[j]
    }

    return vetor
}

export function embaralhar_vetor(elementos) {
    const tamanho = elementos.length
    const min = 0
    const max = tamanho - 1
    let j
    let auxiliar

    for (let i = 0; i < tamanho; i++) {
        j = random(min, max)
        auxiliar = elementos[i]
        elementos[i] = elementos[j]
        elementos[j] = auxiliar
    }

    return elementos
}

export function adicionar_novos_elementos(elementos, quantidade) {
    const novo_tamanho = elementos.length + quantidade
    const vetor = new_vetor(novo_tamanho)
    let novo_elemento

    for (let i = 0; i < novo_tamanho; i++) {
        if (i > elementos.length - 1) {
            novo_elemento = Number(input('Novo valor: '))
            vetor[i] = novo_elemento
        }
        else {
            vetor[i] = elementos[i]
        }
    }

    return vetor
}

export function remover_itens_por_valor(elementos, itens) {
    const vetor = new Array()
    let k = 0

    for (let i = 0; i < elementos.length; i++) {
        for (let j = 0; j < itens.length; j++) {
            if (elementos[i] !== itens[j]) {
                vetor[k] = elementos[i]
                k++
            }
        }
    }

    return vetor
}

export function remover_item_da_posicao(elementos, posicao) {
    const vetor = []
    let j = 0
    for (let i = 0; i < elementos.length; i++) {
        if (i !== posicao - 1) {
            vetor[j] = elementos[i]
            j++
        }
    }
    
    return vetor
}

export function editar_valor_da_pos(elementos, posicao){
    let novo_elemento

    for(let i = 0; i < elementos.length; i++){
        if(i === posicao-1){
            novo_elemento = Number(input('Informe o novo elemento: '))
            elementos[i] = novo_elemento
        }
    }

    return elementos
}