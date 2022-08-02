import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let verbo_regular = input('Verbo regular: ').split('er')
    let verbo_1pessoa = ''
    let verbo_2pessoa = ''
    let verbo_3pessoa = ''
    let verbo_1pessoa_plural = ''
    let verbo_2pessoa_plural = ''
    let verbo_3pessoa_plural = ''
    

    if(for_regular(verbo_regular)){
        verbo_1pessoa = verbo_regular + 'o'
        verbo_2pessoa = verbo_regular + 'es'
        verbo_3pessoa = verbo_regular + 'e'
        verbo_1pessoa_plural = verbo_regular + 'emos'
        verbo_2pessoa_plural = verbo_regular + 'eis'
        verbo_3pessoa_plural = verbo_regular + 'em'
    }

    console.log(`Eu ${verbo_1pessoa.replace(',', '')}`)
    console.log(`Tu ${verbo_2pessoa.replace(',', '')}`)
    console.log(`Ele ${verbo_3pessoa.replace(',', '')}`)
    console.log(`Nós ${verbo_1pessoa_plural.replace(',', '')}`)
    console.log(`Vós ${verbo_2pessoa_plural.replace(',', '')}`)
    console.log(`Eles ${verbo_3pessoa_plural.replace(',', '')}`)


}

function for_regular(letra){
   if(letra[1] === ''){
        return true
    }
    else{
        return false
    }
}
main()