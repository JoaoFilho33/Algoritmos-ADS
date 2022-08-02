var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const primeiro = lines[0].split(' ')
    
    const A = Number(primeiro[0])
    const B = Number(primeiro[1])
    const C = Number(primeiro[2])
    
    const triangulo = (A * C) / 2
    const circulo = 3.14159 * C * C
    const trapezio = ((A + B) * C) / 2
    const quadrado = B * B
    const retangulo = A * B
    
    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${retangulo.toFixed(3)}`)

}
main()