import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const pergunta1 = input('Telefonou para a vítima? ')
    const pergunta2 = input('Esteve no local do crime? ')
    const pergunta3 = input('Mora perto da vítima? ')
    const pergunta4 = input('Devia para a vítima? ')
    const pergunta5 = input('Já trabalhou com a vítima? ')

    if(eh_suspeito(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)){
        console.log('Suspeito')
    }
    else if(eh_cumplice(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)){
        console.log('Cúmplice')
    }
    else if(eh_assassino(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)){
        console.log('Assassino')
    }
    else{
        console.log('Inocente')
    }
    

}
main()

function eh_suspeito(p1, p2, p3, p4, p5){
    let contador = 0
    if(contador !== 2){
        if(p1 === 'sim'){
            contador ++
        }
        if(p2 === 'sim'){
            contador ++
        }
        if(p3 === 'sim'){
            contador ++
        }
        if(p4 === 'sim'){
            contador ++
        }
        if(p5 ==='sim'){
            contador ++
        }
    }
    if(contador === 2){
        return true
    }
    else{
        return false
    }
}

function eh_cumplice(p1, p2, p3, p4, p5){
    let contador = 0
    if(contador !== 3 || contador !== 4){
        if(p1 === 'sim'){
            contador ++
        }
        if(p2 === 'sim'){
            contador ++
        }
        if(p3 === 'sim'){
            contador ++
        }
        if(p4 === 'sim'){
            contador ++
        }
        if(p5 ==='sim'){
            contador ++
        }
    }

    if(contador === 3 || contador === 4){
        return true
    }
    else{
        return false
    }
}

function eh_assassino(p1, p2, p3, p4, p5){
    let contador = 0
    if(contador !== 5){
        if(p1 === 'sim'){
            contador ++
        }
        if(p2 === 'sim'){
            contador ++
        }
        if(p3 === 'sim'){
            contador ++
        }
        if(p4 === 'sim'){
            contador ++
        }
        if(p5 ==='sim'){
            contador ++
        }
    }
    if(contador === 5){
        return true
    }
    else{
        return false
    }
}