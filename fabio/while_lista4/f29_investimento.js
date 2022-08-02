import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const aporte = Number(input('Investimento mensal: '))
    let juros = Number(input('Taxa de juros mensal: '))
    let final = aporte

    for(let i = 1; i < 12; i++){
        final = (juros / 100) * final + final + aporte 
    }

    console.log('*** Processamento ***')
    console.log(`Saldo do investimento após 1 ano: ${final.toFixed(2)}`)

    let ano_seguinte = input('Deseja processa mais um ano (sim, não)?')
    while(ano_seguinte === 'sim'){
        for(let i = 1; i < 12; i++){
            final = (juros / 100) * final + final + aporte 
        }
        console.log(`${final.toFixed(2)}`)
        ano_seguinte = input('Deseja processar mais um ano (sim, não)?')
    }
    
}
main()