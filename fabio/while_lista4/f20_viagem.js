import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let distancia_atual = 1
    let distancia_falta = 600
    let litros_consumidos = 0

    while(distancia_falta > 0){
        distancia_atual = Number(input('\t*Medir distância percorrida desde a última medição: '))
        if(distancia_atual === 0){
            break
        }

        distancia_falta -= distancia_atual
    
        litros_consumidos = distancia_atual / 12
        console.log(`Ainda faltam ${distancia_falta} km`)
        console.log(`Percorreu ${distancia_atual} km`)
        console.log(`Consumiu ${litros_consumidos.toFixed(2)} litros`)
        if(distancia_falta === 0){
            console.log('O carro chegou ao seu destino')
        }
        else{
            console.log('O carro ainda não chegou lá')
        }
    }
    const eficiencia = 600 / 50
    console.log(`O carro faz ${eficiencia} km/l`)
}
main()