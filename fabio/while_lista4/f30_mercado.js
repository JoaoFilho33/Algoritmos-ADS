import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let produto = ''
    let preco = ''
    let qtd = ''
    let valor_total = 0

    while(produto !== 'FIM'){
        produto = input('Nome do produto: ')
        if(produto === 'FIM'){
            break
        }
        preco = Number(input('Preço do produto: '))
        qtd = Number(input('Quantidade: '))

        valor_total = preco * qtd

        if(qtd <= 10){
            valor_total = valor_total
        }
        else if(qtd <= 20){
            valor_total -= 0.1 * valor_total
        }
        else if(qtd <= 50){
            valor_total -= 0.2 * valor_total
        }
        else{
            valor_total -= 0.25 * valor_total
        }


        console.log(produto)
        console.log(`Total = R$ ${valor_total.toFixed(2)}`)
    }

}
main()