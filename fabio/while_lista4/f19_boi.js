import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let id = 1
    let id_maior = 0
    let id_menor = 0
    let peso_maior = 0
    let peso = 0
    let peso_menor = 10000000

    while(id !== 0){
        id = Number(input('Nº de identificação: '))
        if(id === 0){
            break
        }
        peso = Number(input('Peso: '))

        if(peso > peso_maior){
            peso_maior = peso
            id_maior = id
        }
        else if(peso < peso_menor){
            peso_menor = peso
            id_menor = id
        }
    }

    console.log('\t***Boi mais gordo***')
    console.log(`Id: ${id_maior}`)
    console.log(`peso: ${peso_maior}`)
    console.log(`\t***Boi mais magro***`)
    console.log(`Id: ${id_menor}`)
    console.log(`peso: ${peso_menor}`)

}
main()