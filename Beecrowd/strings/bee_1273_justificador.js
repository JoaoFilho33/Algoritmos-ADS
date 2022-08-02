import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let entrada = 1
    let nomes = []
    let nome, string_justificada, espaco
    while (entrada !== 0) {
        entrada = Number(input('Qtd de casos: '))
        if (entrada === 0) {
            break
        }
        for (let i = 0; i < entrada; i++) {
            nome = input('> ')    
            nomes.push(nome)
        }

        const maior = maior_nome(nomes)

        for (let nome of nomes) {
            espaco = maior - nome.length
            string_justificada = adiciona_espaco(nome, espaco)
            console.log(string_justificada)
        }
    }
}
function maior_nome(nomes) {
    let maior = 0
    for(let nome of nomes) {
        if (nome.length > maior) {
            maior = nome.length
        }
    }
    return maior
}

function adiciona_espaco(nome, qtd_espaco) {
    let nome_justificado = ''

    for (let i = 0; i < qtd_espaco; i++) {
        nome_justificado += ' '
    }

    nome_justificado += nome

    return nome_justificado
}


main()