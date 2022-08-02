import {input} from './io_utils.js'
function main(){
    const valores = input('Informe dois valores, utilizando uma casa decimal(x, y): ')
    const [x, y] = valores.split(' ').map(Number)

    if(x > 0 && y > 0){
        console.log('Q1')
    }
    else if(x < 0 && y > 0){
        console.log('Q2')
    }
    else if(x < 0 && y < 0){
        console.log('Q3')
    }
    else if(x > 0 && y < 0){
        console.log('Q4')
    }
    else if(x === y && y ===0){
        console.log('Origem')
    }
    else if(y === 0 && x !== 0){
        console.log('Eixo X')
    }
    else if(x === 0 && y!== 0){
        console.log('Eixo Y')
    }
}
main()