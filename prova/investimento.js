import prompt from 'prompt-sync'
const input = prompt()

function main(){

    console.log('*** Investimento Mariana ***')
    const objetivo = input('Qual o seu objetivo: ')
    const quanto_objetivo = Number(input('Quanto precisa para realizar esse objetivo: '))

    const salario = Number(input('Qual o seu salário: '))
    const porcento = Number(input('Quanto porcento você pretende investir mensalmente? '))
    console.log('*** TAXA DE JUROS (0.01% A 1.00%) ***')
    const taxa = Number(input('Escolha uma taxa de juros: '))

    const final = objetivo_nao_for_concluido(quanto_objetivo, salario, porcento, taxa)
    
    if(final >= 12){
        const anos = Math.trunc(final / 12)
        const meses = final - (12 * anos)
        console.log(`O objetivo de ${objetivo} será completado em ${anos} anos e ${meses} meses.`)
    }
    else{
        console.log(`O objetivo de ${objetivo} será completado em ${final} meses.`)
    }
}
main()
function objetivo_nao_for_concluido(quanto_objetivo, salario, porcento, taxa){
    const porcentagem_investida = salario * (porcento / 100)
    let meta = porcentagem_investida * taxa
    let cont = 0

    while(meta < quanto_objetivo){
        meta = salario + (meta * taxa)
        cont++
    }
    return cont
    
}