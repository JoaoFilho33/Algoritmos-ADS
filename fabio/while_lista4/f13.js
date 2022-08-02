import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let funcionario = ''
    let salario_atual = 1
    let novo_salario = 0

    let soma_salarios_atuais = 0
    let soma_salarios_reajustados = 0
   
    while(salario_atual !== 0){
        funcionario = input('Nome do funcionário: ')
        salario_atual = Number(input('Salário atual: '))

        novo_salario = salario_acrescido(salario_atual)

        console.log(`Novo salário = ${novo_salario}`)

        soma_salarios_atuais += salario_atual
        soma_salarios_reajustados += novo_salario
    }

    const diferença = soma_salarios_reajustados - soma_salarios_atuais

    console.log(`A soma dos salário antigos é: R$ ${soma_salarios_atuais}`)
    console.log(`A soma dos salário reajutados é: R$ ${soma_salarios_reajustados}`)
    console.log(`A difereça é: R$ ${diferença.toFixed(2)}`)

}
main()

function salario_acrescido(salario_atual){
    let novo_salario = 0
    if(salario_atual >= 0 && salario_atual <= 2999.99){
        novo_salario = (salario_atual * 0.25) + salario_atual
    }
    else if(salario_atual >= 3000 && salario_atual <= 5999.99){
        novo_salario = (salario_atual * 0.20) + salario_atual
    }
    else if(salario_atual >= 6000 && salario_atual <= 9999.99){
        novo_salario = (salario_atual * 0.15) + salario_atual
    }
    else{
        novo_salario = (salario_atual * 0.10) + salario_atual
    }

    return novo_salario
}