import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let frase = input('Frase: ')
    let letra = ler_letra()
    
    for(let i=0; i < frase.length; i++){
        if(frase[i] !== letra){
            frase[i] = numero_extenso(frase[i])
        }
    }

}
function ler_letra(){
    try{
    const vogal = fs.readFileSync('vogais.txt', 'utf-8')
        return vogal
    } catch (error) {
        console.error(error)
    }
}

function numero_extenso(numero){
    for(let i = 0; i < numero.length; i++){
        if(numero < 10){
            numero = converter_unidade(numero)
        }
        else if(numero < 100){
            numero[i] = converter_centena(numero)
            numero[i+1] = converter_unidade(numero[numero[i+1]])
        }
    }
}

function converter_unidade(numero){
    if(numero === 0){
        return ''
    }
    else if(numero === 1){
        return 'um'
    }
    else if(numero === 2){
        return 'dois'
    }
    else if(numero === 3){
        return 'três'
    }
    else if(numero === 4){
        return 'quatro'
    }
    else if(numero === 5){
        return 'cinco'
    }
    else if(numero === 6){
        return 'seis'
    }
    else if(numero === 7){
        return 'sete'
    }
    else if(numero === 8){
        return 'oito'
    }
    else if(numero === 9){
        return 'nove'
    }
}




main()