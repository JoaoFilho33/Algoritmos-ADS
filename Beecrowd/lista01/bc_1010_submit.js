var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const peca1 = lines[0].split(' ')
    const peca2 = lines[1].split(' ')
    
    const codigo1 = Number(peca1[0])
    const numero_pecas1 = Number(peca1[1])
    const valor_unitario1 = Number(peca1[2])
    
    const codigo2 = Number(peca2[0])
    const numero_pecas2 = Number(peca2[1])
    const valor_unitario2 = Number(peca2[2])
    
    const soma = numero_pecas1 * valor_unitario1 + numero_pecas2 * valor_unitario2
    
    console.log(`VALOR A PAGAR: R$ ${soma.toFixed(2)}`)
}
main()