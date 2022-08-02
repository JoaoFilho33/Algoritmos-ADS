//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import{print, input} from '../io_utils.js'
function main(){
    //entrada
    const anos = Number(input('Informe quantos anos você tem: '))
    const meses = Number(input('Quantos meses: '))
    const dias = Number(input('Quantos dias: '))

    //processamento
    const dias_anos = (anos * 12) * 365
    const dias_meses = (meses * 30)
    const dias_output = dias 

    const soma = dias_anos + dias_meses + dias_output
    print(`Você tem ${soma} dias de vida `)

}
main()