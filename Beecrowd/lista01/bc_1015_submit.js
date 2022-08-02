var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const p1 = lines[0].split(' ')
    const p2 = lines[1].split(' ')
    
    const x1 = Number(p1[0])
    const y1 = Number(p1[1])
    const x2 = Number(p2[0])
    const y2 = Number(p2[1])
    
    const distancia = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))
    
    console.log(`${distancia.toFixed(4)}`)


    
}
main()