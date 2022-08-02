//import prompt from 'prompt-sync'
//const input = prompt()
import fs from 'fs'
var input = fs.readFileSync('1051.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const salario = Number(lines[0])
    
    let faixa2  
    let faixa3 
    let faixa4
    let imposto = 0

    if(salario <= 2000){
        console.log('Isento')
    }
    else if(salario > 2000 && salario <= 3000){
        faixa2 = (salario - 2000.01) * 0.08
        imposto = faixa2
        console.log(`R$ ${imposto.toFixed(2)}`)
    }
    else if(salario > 3000 && salario <= 4500){
        faixa2 = 999.99 * 0.08
        faixa3 = (salario - 3000.01) * 0.18
        imposto = faixa2 + faixa3
        console.log(`R$ ${imposto.toFixed(2)}`)
    }
    else{
        faixa2 = 999.99 * 0.08 
        faixa3 = 1499.99 * 0.18
        faixa4 = (salario - 2000 - 999.99 - 1499.99) * 0.28
        imposto = faixa2 + faixa3 + faixa4
        console.log(`R$ ${imposto.toFixed(2)}`)
    }

}


main()