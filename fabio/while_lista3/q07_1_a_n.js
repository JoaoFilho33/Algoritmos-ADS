import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let numero = Number(input('Número: '))
    let soma = 0

    let count = 0
    while(count <= numero){
        soma += count
        count++
    }
    console.log(soma)

}
main()