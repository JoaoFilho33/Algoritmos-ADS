import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let identificacao = -1
    let identificacao_magro = 0
    let identificacao_gordo = 0

    let nome = ''
    let nome_magro = ''
    let nome_gordo = ''

    let peso = 0
    let peso_magro = Infinity
    let peso_gordo = 0

    while(identificacao !== 0){
        identificacao = Number(input('Número de identificação: '))
        if(identificacao === 0){
            break
        }
        nome = input('Nome: ')
        peso = Number(input('Peso (kg): '))

        if(peso < peso_magro){
            peso_magro = peso
            identificacao_magro = identificacao
            nome_magro = nome
        }
        if(peso > peso_gordo){
            peso_gordo = peso
            identificacao_gordo = identificacao
            nome_gordo = nome
        }
    }

    console.log('*** Ficha dos bois ***')
    console.log('\tMais Gordo')
    console.log(`Identificação: ${identificacao_gordo}`)
    console.log(`Nome: ${nome_gordo}`)
    console.log(`Peso: ${peso_gordo}`)
    
    console.log('\tMais Magro')
    console.log(`Identificação: ${identificacao_magro}`)
    console.log(`Nome: ${nome_magro}`)
    console.log(`Peso: ${peso_magro}`)
}
main()