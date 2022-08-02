import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let numero = Number(input('Número: '))
    let candidato_a_dividor = numero

    while(numero !== 0){

        somente_divisores(numero)
        numero = Number(input('Número: ')) 

    }
}
main()
function somente_divisores(numero){
    let candidato_a_dividor = numero
    while(candidato_a_dividor > 0){

        if(numero % candidato_a_dividor === 0){
        console.log(candidato_a_dividor)
        }

        candidato_a_dividor --
    }
}