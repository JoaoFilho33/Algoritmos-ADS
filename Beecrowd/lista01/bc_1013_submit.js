var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const valor = lines[0].split(' ')
    
    const A = Number(valor[0])
    const B = Number(valor[1])
    const C = Number(valor[2])
    
    const AB = ((A+B + Math.abs(A-B))) / 2
    
    const AB_C = ((AB + C + Math.abs(AB - C))) / 2
    console.log(`${AB_C} eh o maior`)
}
main()