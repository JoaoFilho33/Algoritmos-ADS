//Leia data atual (dia, mês e ano) e a data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata 
//(anos)
import {input} from '../../io_utils.js'

function teste_idade(data_hoje, data_nascimento){
    //let resultado1 = 0
    const dias1 = data_hoje[0] - data_nascimento[0]
    const mes1 = data_hoje[1] - data_nascimento[1]
    const ano1 = data_hoje[2] - data_nascimento[2]

    
    const todosEmdias = Math.floor(dias1) + Math.floor((mes1 * 30) - dias1) + Math.floor(ano1 * 365)

    const tudoEmanos = Math.trunc(todosEmdias / 365)

    return tudoEmanos

}

function main(){
    const data_hoje = input('Digite a data atual: ').split(' ').map(Number)
    const data_nascimento = input('Informe a sua data de nascimento: ').split(' ').map(Number)

    const idade = teste_idade(data_hoje, data_nascimento)

    console.log(`Você tem ${idade} anos`)
}
main()

/*
16/04/2022

31/03/2004
*/

//utilizar Math.floor para pegar apenas a parte inteira