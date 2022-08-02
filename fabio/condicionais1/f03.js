import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const letra = input('Digite uma letra: ')
    const vogais_colecao = ler_vogais()
    const consoantes_colecao = ler_consoantes()
    //const consoantes_colecao = linesConsoantes

    if(for_vogal(letra, vogais_colecao)){
        console.log('É vogal')
    }
    else if(for_consoantes(letra, consoantes_colecao)){
        console.log('É consoante')
    }
   
}
main()
function for_vogal(letra, vogais_colecao){
    let i = 0
    for(let palavra of vogais_colecao){
        if(palavra === letra){
            console.log('É vogal')
            i++
        }
    }
}
//
function for_consoantes(letra, consoantes_colecao){
    let i = 0
    for(let palavra of consoantes_colecao){
        if(palavra === letra){
            console.log('É consoante')
            i++
        }
    }
    return false
}
function ler_vogais(){
try{
    const vogais = fs.readFileSync('vogais.txt', 'utf-8').split('\n')
    return vogais
}catch (error){
    console.error(error)
}
}
//

function ler_consoantes(){
    try{
        const consoantes = fs.readFileSync('consoantes.txt', 'utf-8').split('\n')
        return consoantes
    }catch (error){
        console.error(error)
    }
    }
