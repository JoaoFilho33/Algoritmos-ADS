import fs from 'fs'
var input = fs.readFileSync('1168.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const qtd_casos = lines[0]
    let qtd_leds

    let vetor_casos 

    for(let i = 1; i <= qtd_casos; i++){
        qtd_leds = 0
        vetor_casos = lines[i]

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