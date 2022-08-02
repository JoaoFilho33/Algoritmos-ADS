import prompt from 'prompt-sync'
const input = prompt()
function main(){
    console.log('\t** Tipos de carne: Filé, Alcatra, Picanha ***')
    const tipo = input('Qual o tipo de carne: ')
    const quantidade = Number(input('Quantidade de carne em Kg: '))
    console.log('*** PROMOÇÃO: Cartão Tabajara -> 5% de desconto ***')
    const tipo_pagamento = input('Forma de pagamento: ')

    let valor_kg = 0
    let valor_total = 0
    if(eh_file(tipo)){
        if(quantidade <= 5){
            valor_kg = 4.9
            valor_total = valor_kg * quantidade
        }
        else{
            valor_kg = 5.8
            valor_total = valor_kg * quantidade
        }
    }
    else if(eh_alcatra(tipo)){
        if(quantidade <= 5){
            valor_kg = 5.9
            valor_total = valor_kg * quantidade
        }
        else{
            valor_kg = 6.8
            valor_total = valor_kg * quantidade
        }
    }
    else if(eh_picanha(tipo)){
        if(quantidade <= 5){
            valor_kg = 6.9
            valor_total = valor_kg * quantidade
        }
        else{
            valor_kg = 7.8
            valor_total = valor_kg * quantidade
        }
    }
//
    let novo_valor = 0
    let desconto = 0
    if(eh_tabajara(tipo_pagamento)){
        desconto = valor_total * 0.05
        novo_valor = valor_total - desconto
    }

    console.log('\t*** Cupom fiscal ***')
    console.log(`Tipo: ${tipo}`)
    console.log(`Quantidade de Carne: ${quantidade} Kg`)
    console.log(`Preço Total: R$ ${valor_total.toFixed(2)}`)
    console.log(`Tipo de pagamento: ${tipo_pagamento}`)
    console.log(`Valor do Desconto: R$ ${desconto.toFixed(2)}`)
    if(novo_valor !== 0){
    console.log(`Valor a pagar: R$ ${novo_valor.toFixed(2)}`)
    }
    else{
        console.log(`Valor a pagar: R$ ${valor_total.toFixed(2)}`)
    }

}
main()

function eh_file(tipo){
    if(tipo === 'Filé'){
        return true
    }
    else{
        return false
    }
}

function eh_alcatra(tipo){
    if(tipo === 'Acatra'){
        return true
    }
    else{
        return false
    }
}

function eh_picanha(tipo){
    if(tipo === 'Picanha'){
        return true
    }
    else{
        return false
    }
}

function eh_tabajara(tipo_pagamento){
    if(tipo_pagamento === 'Cartão Tabajara'){
        return true
    }
    else{
        return false
    }
}