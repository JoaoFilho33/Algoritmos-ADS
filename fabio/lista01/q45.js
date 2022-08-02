//Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para 
//decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o 
//saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor 
//disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de 
//notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria 
//indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um 
//algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o 
//critério da distribuição ótima.

import{print, input} from '../../../io_utils.js'
function main(){
    let valor_troco = Number(input('Informe o valor a ser repassado: '))

    let notas100 = 0
    let notas50 = 0
    let notas20 = 0
    let notas10 = 0
    let notas5 = 0
    let moedas1 = 0

    while (valor_troco > 0){

        if(valor_troco > 99){
        valor_troco -= 100
        notas100 += 1
    
    }else if(valor_troco > 49 && valor_troco < 99){
        valor_troco -= 50
        notas50 += 1
          
    }else if(valor_troco > 19 && valor_troco < 50){
        valor_troco -= 20
        notas20 += 1
                  
    }else if(valor_troco > 9 && valor_troco < 20){
        valor_troco -= 10
        notas10 += 1
           
    }else if(valor_troco > 4 && valor_troco < 10){
        valor_troco -= 5
        notas5 += 1
         
    
    }else if(valor_troco >= 1 && valor_troco < 5){
        valor_troco -= 1
        moedas1 += 1
        
    }
    }

    print(`O saque será ${notas100} notas de R$ 100,00`)
    print(`O saque será ${notas50} notas de R$ 50,00`)
    print(`O saque será ${notas20} notas de R$ 20,00`)
    print(`O saque será ${notas10} notas de R$ 10,00`)
    print(`O saque será ${notas5} notas de R$ 5,00`)
    print(`O saque será ${moedas1} notas de R$ 1,00`)
}
main()