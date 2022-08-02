import fs from 'fs'
var input = fs.readFileSync('1173.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let valor = Number(lines[0]) 

    console.log(`N[0] = ${valor}`)
    for(let i = 1; i < 10; i++){
        valor = valor * 2
        console.log(`N[${i}] = ${valor}`)
    }

}


main()