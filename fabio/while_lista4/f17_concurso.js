import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let nome
    let nome_alta = ''
    let nome_baixa = ''
    let nome_gorda = ''
    let nome_magra = ''
    let mais_alta = 0
    let mais_baixa = 10000
    let mais_gorda = 0
    let mais_magra = 10000
    let altura = 0
    let peso = 0
    while(nome !== 'fim'){
        nome = input('Nome: ')
        if(nome === 'fim'){
            break
        }
        altura = Number(input('Altura: '))
        peso = Number(input('Peso: '))

        if(altura > mais_alta){
            mais_alta = altura
            nome_alta = nome
        }
        else if(altura < mais_baixa){
            mais_baixa = altura
            nome_baixa = nome
        }
        
        if(peso > mais_gorda){
            mais_gorda = peso
            nome_gorda = nome
        }
        else if(peso < mais_magra){
            mais_magra = peso
            nome_magra = nome
        }
    }
    console.log('\t*** Candidata mais alta ****')
    console.log(`Nome: ${nome_alta}`)
    console.log(`Altura: ${mais_alta}`)
    console.log('\t*** Candidata mais baixa ****')
    console.log(`Nome: ${nome_baixa}`)
    console.log(`Altura: ${mais_baixa}`)
    console.log('\t*** Candidata mais gorda ****')
    console.log(`Nome: ${nome_gorda}`)
    console.log(`Peso: ${mais_gorda}`)
    console.log('\t*** Candidata mais magra ****')
    console.log(`Nome: ${nome_magra}`)
    console.log(`Peso: ${mais_magra}`)
}
main()