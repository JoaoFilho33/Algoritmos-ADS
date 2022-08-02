// import prompt from 'prompt-sync'
// const input = prompt()
import fs from 'fs'
var input = fs.readFileSync('1132.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const x = Number(lines[0])
    const y = Number(lines[1])
    const [menor, maior] = busca_menor_maior(x, y)
    let soma = 0

    for(let count = menor; count <= maior; count++){
        if(!eh_multiplo_de_13(count)){
            soma += count
        }
        
    }
    console.log(soma)

}

function busca_menor_maior(x, y){
    if(x > y){
        return [y, x]
    }
    else{
        return [x, y]
    }
}

function eh_multiplo_de_13(valor){
    return valor % 13 === 0
}

main()