//Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
//nascimento e a data (dia, mês e ano) atual.
import {input} from '../../io_utils.js'
function main(){
    const data_hoje = input('Digite a data atual: ').split(' ').map(Number)
    const data_nascimento = input('Informe a sua data de nascimento: ').split(' ').map(Number)


    const idadeanos = teste_anos(data_hoje, data_nascimento)

    console.log(`Você tem ${idadeanos} de vida`)
}
main()
function teste_anos(data_hoje, data_nascimento){
    
    const dataAtual = data_hoje[0]  + ((data_hoje[1]) * 30) + ((data_hoje[2] * 365))
    const dataNascimento = data_nascimento[0] + ((data_nascimento[1] * 30)) + ((data_nascimento[2] * 365))
   
    let dias = dataAtual - dataNascimento
    let anos = Math.abs(Math.trunc(dias / 365))
    dias %= 365
    let meses = Math.abs(Math.trunc(dias /30))
    dias %= 30

    return `${dias} dias, ${meses} meses, ${anos} anos`
}