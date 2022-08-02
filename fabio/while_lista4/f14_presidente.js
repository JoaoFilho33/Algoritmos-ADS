import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let opiniao = 0
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indecisos = 0
    let outros = 0
    let nulo_branco = 0
    let entrevistados
    show_opcoes() 

    while(opiniao !== -1){
        opiniao = Number(input('Informe o seu candidato: '))

        if(opiniao == -1){
            break
        }
        if(opiniao === 45){
            serra++
        }
        else if(opiniao === 13){
            dilma++
        }
        else if(opiniao === 23){
            ciro++
        }
        else if(opiniao === 99){
            indecisos++
        }
        else if(opiniao === 98){
            outros++
        }
        else if(opiniao === 0){
            nulo_branco++
        }
        
        entrevistados++
    }

    const somatorio = serra + dilma + ciro + outros + indecisos + nulo_branco
    const percentual_dilma =  (dilma * 100) / somatorio
    const percentual_serra =  (serra * 100) / somatorio
    const percentual_ciro =  (ciro * 100) / somatorio
    const percentual_indecisos =  (indecisos * 100) / somatorio
    const percentual_outros =  (outros * 100) / somatorio
    const percentual_nulo =  (nulo_branco * 100) / somatorio

    console.log(`Porcentagem Dilma: ${percentual_dilma.toFixed(2)}%`)
    console.log(`Porcentagem Serra: ${percentual_serra.toFixed(2)}%`)
    console.log(`Porcentagem Ciro: ${percentual_ciro.toFixed(2)}%`)
    console.log(`Porcentagem indecisos: ${percentual_indecisos.toFixed(2)}%`)
    console.log(`Porcentagem outros: ${percentual_outros.toFixed(2)}%`)
    console.log(`Porcentagem nulo/branco: ${percentual_nulo.toFixed(2)}%`)


}
main()

function show_opcoes(){
        console.log('\t*** Opções ***')
        console.log('Serra=45, Dilma=13 ou Ciro Gomes=23')
        console.log('\t*** Não sabe ainda? ***')
        console.log('indeciso=99, outros=98, nulo/branco=0')  
}

function opcoes(opiniao, serra, ciro, dilma, indecisos, outros, nulo_branco){
    if(opiniao === 45){
        return serra++
    }
    else if(opiniao === 13){
        return dilma++
    }
    else if(opiniao === 23){
        return ciro++
    }
    else if(opiniao === 99){
        return indecisos++
    }
    else if(opiniao === 98){
        return outros++
    }
    else if(opiniao === 0){
        return nulo_branco++
    }
}