import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const morangos = Number(input('Valor em Kg de morango: '))
    const maca = Number(input('Valor em Kg de maçã: '))

    const kg_total = morangos +  maca
    let preco_morango = 0
    let preco_maca = 0
//
    if(morangos <= 5){
        preco_morango = 2.5
    }
    else{
        preco_morango = 2,2
    }

    if(maca <= 5){
        preco_maca = 1.8
    }
    else{
        preco_maca = 1.5
    }
//
    const preco_total = (preco_maca * maca) + (preco_morango * morangos)
    let novo_preco = 0  

    if(kg_total > 8 || preco_total > 25){
        novo_preco = preco_total - (preco_total * 0.01)
        
        console.log(`R$ ${novo_preco.toFixed(2)}`)
    }
    else{
        console.log(`R$ ${preco_total.toFixed(2)}`)
    }
    

}
main()