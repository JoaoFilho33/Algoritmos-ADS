import prompt from "prompt-sync"
const input = prompt()
function main(){
    let numero = Number(input('Número: '))


    while(numero >= 1){
        numero = numero/2
        
    }
    console.log(numero)
}
main()