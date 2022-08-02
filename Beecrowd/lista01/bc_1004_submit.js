var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const inteiro1 = Number(lines[0])
    const inteiro2 = Number(lines[1])
    
    const PROD = inteiro1 * inteiro2
    
    console.log(`PROD = ${PROD}`)
}
main()