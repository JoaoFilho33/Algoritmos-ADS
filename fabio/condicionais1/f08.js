import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const hora_carga = input('Qual o seu valor hora, e sua carga horária mensal? ')
    const [valor_hora, carga_horaria] = hora_carga.split(' ').map(Number)

    const salario = valor_hora * carga_horaria
    const inss = 0.1 * salario
    const fgts = 0.11 * salario
    console.log(`${salario}`)
    
    if(salario <= 900){
        const descontos = inss
        console.log(`Salário Bruto: (${valor_hora} * ${carga_horaria})         : R$ ${salario},00`)
        console.log(`(-)IR (Isento)                   : Isento`)
        console.log(`(-)INSS(10%)                     : R$ ${inss},00`)
        console.log(`FGTS(11%)                        : R$ ${fgts},00`)
        console.log(`Total de descontos               : R$ ${descontos},00`)
    }
    else if(salario > 900 && salario <= 1500){      
        const ir = salario * 0.05
        const descontos = inss + ir
        console.log(`Salário Bruto: (${valor_hora} * ${carga_horaria})         : R$ ${salario},00`)
        console.log(`(-)IR (5%)                       : R$ ${ir},00`)
        console.log(`(-)INSS(10%)                     : R$ ${inss},00`)
        console.log(`FGTS(11%)                        : R$ ${fgts},00`)
        console.log(`Total de descontos               : R$ ${descontos},00`)
    }
    else if(salario > 1500 && salario <= 2500){
        const ir = salario * 0.1
        const descontos = inss + ir
        console.log(`Salário Bruto: (${valor_hora} * ${carga_horaria})         : R$ ${salario},00`)
        console.log(`(-)IR (10%)                      : R$ ${ir},00`)
        console.log(`(-)INSS(10%)                     : R$ ${inss},00`)
        console.log(`FGTS(11%)                        : R$ ${fgts},00`)
        console.log(`Total de descontos               : R$ ${descontos},00`)
    }
    else if(salario > 2500){
        const ir = salario * 0.2
        const descontos = inss + ir
        console.log(`Salário Bruto: (${valor_hora} * ${carga_horaria})         : R$ ${salario},00`)
        console.log(`(-)IR (20%)                      : R$ ${ir},00`)
        console.log(`(-)INSS(10%)                     : R$ ${inss},00`)
        console.log(`FGTS(11%)                        : R$ ${fgts},00`)
        console.log(`Total de descontos               : R$ ${descontos},00`)
    }
}
main()
