import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const frase = input('Frase: ').split(' ')

    const neuronimo = aplicar_neuronimo(frase)

    console.log(neuronimo)
}
function aplicar_neuronimo(frase){
    let abreviacao = ''
    let ultimo_caractere

    for(let palavra of frase){
        if(maior_igual_quatro_letras(palavra)){
            ultimo_caractere = palavra.length-1
            abreviacao += `${palavra[0]}${palavra.length-2}${palavra[ultimo_caractere]} `
        }else{
            abreviacao += `${palavra} `
        }
    }

    return abreviacao
}

function maior_igual_quatro_letras(palavra){
    if(palavra.length >= 4){
        return true
    }

    return false
}
main()