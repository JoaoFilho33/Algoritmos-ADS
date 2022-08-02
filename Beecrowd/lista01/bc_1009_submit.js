var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const nome_vendedor = lines[0]
    const salario_fixo = Number(lines[1])
    const total_vendas = Number(lines[2])
    
    const comissao = 0.15 * total_vendas
    const salario_total = salario_fixo + comissao
    
    console.log(`TOTAL = R$ ${salario_total.toFixed(2)}`)
    
}
main()