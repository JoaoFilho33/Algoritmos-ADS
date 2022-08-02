//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias

import{print, input} from '../io_utils.js'
function main(){
    //entrada
    const dias = Number(input('Quantos dias de vida você tem: '))

    //processamento
    const anos = Math.trunc(dias / 365)
    const anos_resto = dias % 365
    const meses = Math.trunc(anos_resto / 30)
    const dias_output = anos_resto - (meses * 30)

    //saida
    print(`Você tem ${anos} anos, ${meses} meses, ${dias_output} dias.`)


}
main()