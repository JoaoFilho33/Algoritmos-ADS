//Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
//Escreva na tela qual dos professores tem salário total maior.
import {input} from '../../io_utils.js'
function main(){
    const hora = input('Digite a quantidade de horas aula dos dois professores: ').split(' ').map(Number)
    const valorhora = input('Digite o valor hora de cada professor: ').split(' ').map(Number)

    const mainSalario = salario(hora, valorhora)

    console.log(`O maior salário é o do ${mainSalario}`)
}
function salario(hora, valorhora){
    let salario1 = 'professor 1'
    let salario2 = 'professor 2'
    const valor1 = hora[0] * valorhora[0]
    const valor2 = hora[1] * valorhora[1]

    if(valor1 > valor2){
        return salario1
    }
    else if(valor2 > valor1){
        return salario2
    }

}
main()
