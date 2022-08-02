import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const numero = Number(input('Número: '))

    if(numero - Math.trunc(numero) === 0){
        console.log(`O número ${numero} é inteiro`)
    }
    else{
        console.log(`O número ${numero} é decimal`)
    }
}
main()