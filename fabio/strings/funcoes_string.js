import *as fs from 'fs'

export function ler_vogais(){
    try {
        const vogal = fs.readFileSync('vogais.txt', 'utf-8')
        return vogal
    } catch (error) {
        console.error(error)
    }
}

export function inverter_palavras(palavra) {

    let palavra_invertida = new Array()
    let count = 0
    let count2 = palavra.length

    while (count2 > 0) {
        palavra_invertida[count2 - 1] = palavra[count]
        count++
        count2--
    }

    return palavra_invertida
}

export function for_vogal(letra, vogais) {
    for (let i = 0; i < vogais.length; i++) {
        if (vogais[i] === letra) {
            return true
        }
    }

}

export function pega_inicial(nome) {
    let inicial = ''
    let letra_do_nome = new Array()

    for (let i in nome) {
        letra_do_nome[i] = nome[i]
    }
    inicial = letra_do_nome[0]

    return inicial
}

export function escrever_vertical(nome) {
    return nome
}