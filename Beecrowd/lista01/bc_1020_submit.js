var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function main(){
    const idade_dias = Number(lines[0])

    var anos = Math.trunc(idade_dias / 365)
    var resto = idade_dias % 365
    
    var meses = Math.trunc(resto / 30)
    var resto1 = resto % 30
    
    var dias = resto1
    
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)
    
    }
main()