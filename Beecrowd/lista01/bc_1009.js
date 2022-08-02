import {print, input} from "./io_utils.js"

function main(){
    const nome_vendedor = input('Nome do vendedor: ')
    const salario_fixo = Number(input('Salario fixo: '))
    const total_vendas = Number(input('Total de vendas: '))
    
    const comissao = 0.15 * total_vendas
    const salario_total = salario_fixo + comissao
    
    console.log(`TOTAL = R$ ${salario_total.toFixed(2)}`)
    
}
main()