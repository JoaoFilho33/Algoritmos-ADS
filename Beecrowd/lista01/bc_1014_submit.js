var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const km = Number(lines[0])
    const combustivel = Number(lines[1])
    
    const consumo_medio = km / combustivel
    
    console.log(`${consumo_medio.toFixed(3)} km/l`)
}
main()