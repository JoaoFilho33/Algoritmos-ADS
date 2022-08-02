import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const texto = input('Texto: ').split('')
    let texto_diagonal = ''

    let count = 0
    while (count < texto.length) {
        texto_diagonal = adiciona_espaco(count)
        texto_diagonal += texto[count]
        console.log(texto_diagonal)
        count++
    }

}
function adiciona_espaco(num_tab) {
    let recebe_espaco = ''
    let count = 0
    while (count < num_tab) {
        recebe_espaco += ' '
        count++
    }

    return recebe_espaco
}


main()