import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let valor = Number(input('Valor: ')) 

    console.log(`X[0] = ${valor}`)
    for(let i = 1; i < 10; i++){
        valor = valor * 2
        console.log(`X[${i}] = ${valor}`)
    }

}


main()