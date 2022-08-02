import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let codigo = 1
    let h_trabalhadas = 0
    let dependentes = 0
    let salario_bruto = 0
    let salario_liquido = 0
    let valor_dependentes = 0

    let valor_hora = 12

    let inss = 0
    let ir = 0

    while(codigo !== 0){
        codigo = Number(input('Código: '))
        if(codigo === 0){
            break
        }
        h_trabalhadas = Number(input('Horas Trabalhadas: '))
        dependentes = Number(input('Número de dependentes: '))

        valor_dependentes = 40 * dependentes

        salario_bruto = (valor_hora * h_trabalhadas) + valor_dependentes

        inss = 0.085 * salario_bruto
        ir = 0.05 * salario_bruto

        salario_liquido = salario_bruto - inss - ir

        console.log(`*** Ficha ${codigo} ***`)
        console.log(`INSS: R$ ${inss.toFixed(2)}`)
        console.log(`IR: R$ ${ir.toFixed(2)}`)
        console.log(``)
        console.log(`Salário Líquido: R$ ${salario_liquido.toFixed(2)}`)
        input('<enter> para o próximo')
        console.clear()

    }

}


main()