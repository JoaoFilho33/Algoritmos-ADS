import fs from 'fs'
var input = fs.readFileSync('teste.txt', 'utf8');
var lines = input.split('\n');


function main(){
    let numero
    let numero_maior = 0
    let posicao = 0


    //let count_pos = 1
    let count = 0
    while(count <= 100){
        numero = Number(lines[count])
        if(numero > numero_maior){
            numero_maior = numero
            posicao = count+1
        }
        count++
        
    }

    console.log(numero_maior)
    console.log(posicao)

}
main()