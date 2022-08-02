import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const qtd_casos = input('Qtd:')
    let qtd_leds

    let vetor_casos 

    for(let i = 0; i < qtd_casos; i++){
        qtd_leds = 0
        vetor_casos = input('> ')

        qtd_leds = qtd_de_leds_para_montagem(vetor_casos)

        console.log(`${qtd_leds} leds`)
    }



}

function qtd_de_leds_para_montagem(numeros){
    const posicao = [6,2,5,5,4,5,6,3,7,6,6]
    let valor
    let qtd_leds = 0

    for(let i = 0; i < numeros.length; i++){
        valor = numeros[i]
        qtd_leds += posicao[valor]
    }


    return qtd_leds
}

main()