import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const frase = input('Frase: ').replace(/\s/g, '')

    console.log(frase)
    const caracteres = frase.length
    console.log(caracteres)

    let contador = 0
    const simbolo = retira_simbolo(frase[contador])
    //
    const percorrer = percorrer_frase(frase)
    //
    console.log(`!@ ${percorrer}`)
    if(simbolo < caracteres){
        
        console.log(`SIMBOLINHO ${simbolo}`)
    }
    else{
        console.log(caracteres)
    }
    console.log(simbolo)
}
main()
function percorrer_frase(frase, caracteres){
    let simbolos = ',.;!?'
    let retirar = 0

    for(let quantidade in simbolos){

    if(simbolos[quantidade] === frase){
        retirar = caracteres - quantidade
    }
}
    return retirar
}

function retira_simbolo(frase){
    let simbolos = ',.;!?'

    for(let quantidade in simbolos){
        if(simbolos[quantidade] === frase)
        return Number(indice) - 1
    }

}