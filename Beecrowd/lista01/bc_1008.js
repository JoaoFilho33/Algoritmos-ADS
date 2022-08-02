import { input} from "./io_utils.js"

function main(){
    const numero = Number(input('Numero do funcionário: '))
    const horaTrabalhada = Number(input('Horas Trabalhadas: '))
    const horaValor = Number(input('Valor hora: '))
    
    
    const salario = horaTrabalhada * horaValor
    
    console.log(`NUMBER = ${numero}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)
}
main()