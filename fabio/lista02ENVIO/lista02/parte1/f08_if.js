//Leia data atual (dia, mês e ano) e a data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (anos)
import {input} from '../../io_utils.js'

function teste_idade(data_hoje, data_nascimento){
    let resultado1 = 0
//Nesta condição, comparo se o ano atual é maior que o ano do nascimento. Se sim, deve por obrigação atender todas as outras
//condições, e em seguida, pegando dia, mês e ano; é usada a expressão todosEmdias, que calcula a quantida de dias existentes 
//entre a data atual e o nascimento. -> em sequencia, converto esses dias em anos.
   if(data_hoje[2] > data_nascimento[2] && data_hoje[0] < data_nascimento[0] || data_hoje[0] > data_nascimento[0]
    || data_hoje[0] === data_nascimento[0] || data_hoje[1] < data_nascimento[1] || data_hoje[1] > data_nascimento[1]
    || data_hoje[1] === data_nascimento[1]){
    const dias1 = data_hoje[0] - data_nascimento[0]
    const mes1 = data_hoje[1] - data_nascimento[1]
    const ano1 = data_hoje[2] - data_nascimento[2]

    const todosEmdias1 = Math.floor(dias1) + Math.floor((mes1 * 30) - dias1) + Math.floor(ano1 * 365)

        resultado1 = Math.trunc(todosEmdias1 / 365)   
   }
//nessa condição o ano atual deve ser menor que o ano de nascimento, se for maior, deve atender as mesmas condições anteriores
//para mês e dia
   else if(data_hoje[2] < data_nascimento[2] && data_hoje[0] < data_nascimento[0] || data_hoje[0] > data_nascimento[0]
    || data_hoje[0] === data_nascimento[0] || data_hoje[1] < data_nascimento[1] || data_hoje[1] > data_nascimento[1]
    || data_hoje[1] === data_nascimento[1]){
    const todosEmdias2 = Math.floor(dias1) + Math.floor((mes1 * 30) - dias1) + Math.floor(ano1 * 365)
        resultado1 = Math.abs(Math.trunc(todosEmdias2 / 365))  

   }
   else if(data_hoje===data_nascimento){
       resultado1 = data_hoje[2] - data_nascimento[2]
   }
   return resultado1
}

function main(){
    const data_hoje = input('Digite a data atual: ').split(' ').map(Number)
    const data_nascimento = input('Informe a sua data de nascimento: ').split(' ').map(Number)

    const idade = teste_idade(data_hoje, data_nascimento)

    console.log(`Você tem(terá) ${idade} anos`)
}
main()

/*
16/04/2022

31/03/2004
*/

//utilizar Math.floor para pegar apenas a parte inteira