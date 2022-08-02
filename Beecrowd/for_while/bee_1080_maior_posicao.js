import prompt from 'prompt-sync'
const input = prompt()
//import fs from 'fs'
//var input = fs.readFileSync('leds.txt', 'utf8');
//var lines = input.split('\n');
function main(){
    let numero
    let numero_maior = 0
    let posicao = 0


    let count = 0
    while(count < 5){
        numero = Number(input(''))
        if(numero > numero_maior){
            numero_maior = numero
            posicao = count+1
        }
        count++
    }

    console.log(numero_maior)
    console.log(posicao)

}


main()