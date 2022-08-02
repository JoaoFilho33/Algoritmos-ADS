import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let idade = 0
    let opiniao = 0

    let idade_otimo = 0
    let count_otimo = 0
    //
    let count_bom = 0
    //
    let count_regular = 0
    //
    let count_pessimo = 0

    while(idade > -1){
        idade = Number(input('Sua idade: '))
        if(idade === -1){
            break
        }
        console.log('1=ótimo, 2=bom, 3=regular, 4=péssimo')
        opiniao = Number(input('Qual a sua opinião sobre o filme: '))

        if(opiniao === 1){
            idade_otimo += idade
            count_otimo++
        }else if(opiniao ===  2){
            count_bom++
        }else if(opiniao === 3){
            count_regular++
        }else if(opiniao === 4){
            count_pessimo++
        }
    }
    const media_otimo = idade_otimo / count_otimo
    const quantitativo_total = count_otimo + count_bom + count_regular + count_pessimo
    const media_bom = (count_bom * 100) / quantitativo_total
   
    console.log(`A média das pesoas que responderam ótimo é ${media_otimo.toFixed(0)} anos`)
    console.log(`${count_regular} pessoas responderam regular`)
    console.log(`${media_bom.toFixed(0)}% de todas as pessoas responderam bom`)

}
main()