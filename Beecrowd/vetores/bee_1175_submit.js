import fs from 'fs'
var input = fs.readFileSync('1175.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let vetor = []
    for(let i = 0; i < 20; i++){
        vetor[i] = Number(lines[i])
    }

    let vetor_invertido = []
    for(let i = 0, j = vetor.length - 1; i < vetor.length; i++, j--){
        vetor_invertido[i] = vetor[j]
        vetor_invertido[j] = vetor[i]
    }
    
    for(let i = 0; i < vetor_invertido.length; i++){
        console.log(`N[${i}] = ${vetor_invertido[i]}`)
    }

}


main()