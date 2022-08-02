import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const sorteio = Math.floor(Math.random()*1000 - 1)
    let valor = 0
    let i = 0
    console.log(sorteio)
    while(valor !== sorteio){
        valor = Number(input('Valor: '))
        if(valor ===  sorteio){
            break
        }
        if(valor < sorteio){
            console.log('Maior')
        }
        else{
            console.log('Menor')
        }
    }
}
main()
