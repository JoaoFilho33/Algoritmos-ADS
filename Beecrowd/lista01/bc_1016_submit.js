var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const km = Number(lines[0])
    
    const minutos = km * 2
    
    console.log(`${minutos} minutos`)
}
main()