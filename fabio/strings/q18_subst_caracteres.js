import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let texto = input('Texto: ').split('')
    const qtd_extrair = Number(input('Substituir quantos caracteres? '))
    const pos_extrair = Number(input('A partir de qual posição? '))

    let count = pos_extrair
    let count2 = 0
    while (count2 < qtd_extrair) {
        texto[count] = input(`Substituir o caractere ${texto[count]} por: `)
        count++
        count2++
    }

    console.log(`**Substiuição: ${texto.join('')}`)
}


main()