import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let texto = input('Texto: ').split('')
    let qtd_extrair = Number(input('Extrair quantos caracteres? '))
    let pos_extrair = Number(input('E a partir de qual posição? '))

    let caracteres_excluidos = []

    let count = pos_extrair
    let count2 = 0
    while(count2 < qtd_extrair){
        caracteres_excluidos[count2] = texto[count]
        texto[count] = ''
        count++
        count2++
    }

    console.log(`**Novo texto: ${texto.join('')}`)
    console.log(`**Foram excluídos: ${caracteres_excluidos.join('')}`)
}
main()