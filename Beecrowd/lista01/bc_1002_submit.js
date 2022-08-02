var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const raio = Number(lines[0])

const area = 3.14159 * Math.pow(raio,2)

console.log(`A=${area.toFixed(4)}`)