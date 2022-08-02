import fs from 'fs'
var input = fs.readFileSync('1179.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let valor = new Array()

    for(let i = 0; i < 10; i++){
        valor[i] = Number(lines[i])
    }
    
    let vetor_par = [5]
    let vetor_impar = [5]
    let count_par = 0
    let count_impar = 0
    for(let i = 0; i < 15; i++){
        if(for_par(valor[i])){
            vetor_par[count_par] = valor[i]
            count_par++
        }
        else{
            console.log(`X[${[i]}] = ${valor[i]}`)
        }
        count++
        if(vetor_par === 5){
            count++
            vetor_par = []
        }
    }

}
function for_par(numero){
    if (numero % 2 === 0) {
        return true
    }
    return false
}

main()