import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
//import {input} from './io_utils.js'
function main(){
    
    //estrutaração do menu  
    let menu = '\t### MenuJAUM ###'
    menu += '\n1 - Palavras com mais de 20 caracterese'
    menu += '\n2 - Palavras sem a letra (e)'
    menu += '\n3 - Palavras que evitam letras proibidas'
    menu += '\n4 - Palavras que usam letras obrigatórias'
    menu += '\n5 - Palavras que usam todas as letras obrigatórias'
    menu += '\n6 - Letras que aparecem em ordem alfabética '
    menu += '\n\n0 - Sair'

    const palavras = loadfile()

    console.log(`${palavras.length} palavras carregadas`)//length é um contador de caracteres da string

//chama o menu, e me deixa escolher uma opção
    console.log(menu)
    let opcao = Number(input(''))
    while(opcao !== 0){
        if(opcao === 1){
            palavras_mais_20_letras(palavras)
        }
        else if(opcao === 2){
            palavras_sem_letra_e(palavras)
        }
        else if(opcao === 3){
            palavras_que_evitam_letras_proibidas(palavras)
        }
        else if(opcao === 4){
            palavras_que_usam_letras_obrigatorias(palavras)
        }
        else if(opcao === 5){
            palavras_que_usam_apenas_letras_obrigatorias(palavras)
        }
        else if(opcao === 6){
            letras_em_ordem_alfabetica_na_palavra(palavras)
        }

       return opcao 

    }

}
main()

//lê as palavras do arquivo palavras.txt
function loadfile(){
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        const palavras_carregadas = data.split('\n')
        return palavras_carregadas
    } catch (error){
        console.error(error)
    }
}

//escreve todas as palavaras > 20 letras
function palavras_mais_20_letras(palavras){
    let i = 0
    const total = palavras.length
   for(let palavra of palavras){
       if(palavra.length > 20){
           console.log(palavra)
           i = i + 1
       }
   }
   const percentual = (i / total) * 100

   console.log(`Existem ${i} palavras com mais de 20 letras`)
   console.log(`Formando um percentual de: ${percentual.toFixed(3)} %`)
}
//
function  palavras_sem_letra_e(palavras){
    let i = 0
    const total = palavras.length
    for(let palavra of palavras){
        if(has_no_e(palavra)){
            console.log(palavra)
            i++
        }
    }
    const percentual = (i/total)*100
    //
    console.log(`Existem ${i} palavras sem a letra (e) `)
    console.log(`O percentual é: ${percentual.toFixed(4)} %`)
}
function has_no_e(palavra){
    for(let letra of palavra){
        if(letra === 'e'){
            return false
        }      
    }
    return true
}
//
function palavras_que_evitam_letras_proibidas(palavras){
    let i = 0
    const letras_proibidas = input('Informe as letras proibidas: ')
    for(let palavra of palavras){
        if(evita(palavra, letras_proibidas)){
            i++
        }
    }
    console.log(`Temos ${i} palavras sem as letras "${letras_proibidas}"`)
}
function evita(palavra, letras_proibidas){
    for (let letra of palavra){
        if(contem(letra, letras_proibidas)){
            return false
        }
    }
    return true
}
function contem(letra, palavra){
    for(let caracter of palavra){
        if(caracter === letra){
            return true
        }
    }
    return false
}
//
function palavras_que_usam_letras_obrigatorias(palavras){
    const letras_obrigatorias = input('Palavras obrigatórias: ')
    for (let palavra of palavras){
        if (uses_only(palavra, letras_obrigatorias)){
            console.log(palavra)
        }
    }
}
function uses_only(palavras_obrigatorias){
    for (let letra of palavras_obrigatorias){
        if (!contem(letra, palavras_obrigatorias)){
            return false
        }
    }
    return true
}
//
function  palavras_que_usam_apenas_letras_obrigatorias(palavras){
    let i = 0
    const letras_obrigatorias = input('Palavras obrigatórias: ')
    for(let palavra of palavras){
        if(uses_all(palavra, letras_obrigatorias)){
            i++
        }
    }
    console.log(`Existem ${i} palavras com as letras informadas`)
}
function uses_all(palavra, letras_obrigatorias){
    let letras_usadas = ''
    let i = 0

    for(let letra of palavra){
        if(contem(letra, letras_obrigatorias) && !contem(letra, letras_usadas)){
        letras_usadas += letra
        i++
        }
    }
    if(i === letras_obrigatorias.length){
        return true
    }
    else{
        return false
    }
}
//
function letras_em_ordem_alfabetica_na_palavra(palavras){
    let i = 0
    for(let palavra of palavras)
        if(is_abecedarian(palavra)){
        console.log(palavra)
        i++
    }
    console.log(`Existem ${i} palavras em ordem alfabética`)
    return i

}
function is_abecedarian(palavra){
    let i = 0
    let letra_repetida = 1

    while(i !== palavra.length){
        let proxima_letra = ordem(palavra[i])

        if(proxima_letra >= letra_repetida){
            letra_repetida = proxima_letra
            i++
        }
        else{
            return false
        }
    }
    return true
}
function ordem(letra){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'

    for(let indice in alfabeto){
        if(alfabeto[indice] === letra){
            return Number(indice) + 1
        }
    }
}