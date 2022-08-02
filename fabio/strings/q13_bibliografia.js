import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const nome = input('Nome completo: ').split(' ')

    let nome_bibliografia = new Array()

    let count = 1
    while(count < nome.length){
        nome_bibliografia[0] = nome[0]
        nome_bibliografia[count] = letra_inicial(nome[count])

        count++
    }

    console.log(nome_bibliografia.join(', '))

}

function letra_inicial(nome){
    let inicial = ''
    let letra_do_nome = new Array()

    for(let i in nome){
        letra_do_nome[i] = nome[i]
    }
    inicial = letra_do_nome[0]

    return inicial
}




main()