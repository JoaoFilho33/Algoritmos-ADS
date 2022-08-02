import prompt from "prompt-sync"
const input = prompt()
function main(){
    const num = Number(input('Número: '))

    let novo_num = Number(input('Número: '))
    while(novo_num !== num){
        novo_num = Number(input('Número: '))
    }
}
main()