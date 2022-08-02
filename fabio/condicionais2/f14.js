import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const litros = Number(input('Litros: '))
    const tipo = input('Tipo de combustível (A-Ácool E G-Gasolina): ')

    const preco_alcool = eh_alcool(litros)
    const preco_gasolina = eh_gasosa(litros)

    if(tipo === 'A' || tipo === 'a'){
        console.log(`R$ ${preco_alcool.toFixed(2)}`)
    }
    else if(tipo === 'G' || tipo === 'g'){
        console.log(`R$ ${preco_gasolina.toFixed(2)}`)
    }
}

main()

function eh_alcool(litros){
    let desconto = 0
    let novo_valor = 0
    const preco_total = 1.9 * litros
    if(litros <= 20){
        desconto = preco_total * 0.03
        novo_valor = preco_total - desconto
        return novo_valor
    }
    else if(litros > 20){
        desconto = preco_total * 0.05
        novo_valor = preco_total - desconto
        return novo_valor
    }
}

function eh_gasosa(litros){
    let desconto = 0
    let novo_valor = 0
    const preco_total = 2.5 * litros
    if(litros <= 20){
        desconto = preco_total * 0.04
        novo_valor = preco_total - desconto
        return novo_valor
    }
    else if(litros > 20){
        desconto = preco_total * 0.06
        novo_valor = preco_total - desconto
        return novo_valor
    }
}