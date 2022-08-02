var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const tempo = Number(lines[0])
    const velocidade_media = Number(lines[1])
    
    const distancia = velocidade_media * tempo
    
    const combustivel = distancia / 12
    
    console.log(`${combustivel.toFixed(3)}`)
}
main()