import {input} from './io_utils.js'
function main(){
    const valores = lines[0]
    const [codigo, quantidade] = valores.split(' ').map(Number)

    if(codigo === 1){
        let preco = quantidade * 4
        console.log(`Total: R$ ${preco.toFixed(2)}`)
    }
    else if(codigo === 2){
        let preco = quantidade * 4.50
        console.log(`Total: R$ ${preco.toFixed(2)}`)
    }
    else if(codigo === 3){
        let preco = quantidade * 5
        console.log(`Total: R$ ${preco.toFixed(2)}`)
    }
    else if(codigo === 4){
        let preco = quantidade * 2
        console.log(`Total: R$ ${preco.toFixed(2)}`)
    }
    else if(codigo === 5){
        let preco = quantidade * 1.5
        console.log(`Total: R$ ${preco.toFixed(2)}`)
    }
}
main()