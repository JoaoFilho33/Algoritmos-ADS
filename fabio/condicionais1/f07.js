import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const salario = Number(input('Informe o seu salário: '))

    if(salario <= 280){
        const aumento = (salario * 0.2) + salario
        console.log(`O seu salário era de ${salario} reais.`)
        console.log('E houve um aumento de 20%.')
        console.log(`Novo salário: ${aumento} reais.`)
    }
    else if(salario > 280 && salario <= 700){
        const aumento = (salario * 0.15) + salario
        console.log(`O seu salário era de ${salario} reais.`)
        console.log('E houve um aumento de 15%.')
        console.log(`Novo salário: ${aumento} reais.`)
    }
    else if(salario > 700 && salario <= 1500){
        const aumento = (salario * 0.1) + salario
        console.log(`O seu salário era de ${salario} reais.`)
        console.log('E houve um aumento de 10%.')
        console.log(`Novo salário: ${aumento} reais.`)
    }
    else if(salario > 1500){
        const aumento = (salario * 0.05) + salario
        console.log(`O seu salário era de ${salario} reais.`)
        console.log('E houve um aumento de 5%.')
        console.log(`Novo salário: ${aumento} reais.`)
    }
}
main()