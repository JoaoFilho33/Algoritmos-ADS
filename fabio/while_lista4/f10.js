import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const qtd_containers = Number(input('Qtd de containers: '))
    const peso_container = Number(input('Peso de cada container (Kg): '))

    let num_bilhete 
    let qtd_bagagens
    let soma_bilhete = 0
    let soma_volume = 0
    let count = 0
   

    while(num_bilhete !== 0){
        num_bilhete = Number(input('Número do bilhete: '))
        qtd_bagagens = Number(input('Qtd de bagagens: '))

        soma_bilhete += num_bilhete
        soma_volume += qtd_bagagens

        count++
    }

    const peso_total_carga = qtd_containers * peso_container
    const volume_bagagens = count * 10
    const peso_total_passageiros = count * 70
    let espaco_pro_combustivel = 500000 - volume_bagagens - peso_total_passageiros - peso_total_carga//que está em Kg

    let combustivel_litros = espaco_pro_combustivel  / 1.5 //relação que converte a quantidade de combustível em kg para litros
    console.log(`gasosa ${combustivel_litros}`)

    console.log(`Existem ${count} passageiros no total`)
    console.log(`O volume total de bagagens é ${volume_bagagens} Kg`)
    if(combustivel_litros >= 10000){
        console.log('Decolagem liberada')
    }
    else{
        console.log('Decolagem não liberada')
    }
}
main()