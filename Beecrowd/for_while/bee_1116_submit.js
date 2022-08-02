import fs from 'fs'
var input = fs.readFileSync('1116.txt', 'utf8');
var lines = input.split('\n');
function main() {
    const N = Number(lines[0])
    let valores
    let x
    let y
    let divisao

    for (let i = 0, j = 1; i < N; i++, j++) {
        valores = lines[j].split(' ')
        x = Number(valores[0])
        y = Number(valores[1])
        divisao = x / y
        if (y === 0) {
            console.log('divisao impossivel')
        }
        else {
            console.log(divisao.toFixed(1))
        }


    }
}


main()