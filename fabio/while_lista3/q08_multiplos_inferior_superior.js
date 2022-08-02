import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num = Number(input('Quais os múltiplos de: '))
    console.log('** Entre **')
    const limite_inferior = Number(input('Limite inferior: '))
    const limite_superior = Number(input('Limite superior: '))

    let count = limite_inferior
    while(count <= limite_superior){
        if(count % num === 0){
            console.log(count)
            count++
        }
        else{
            count++
        }
    }
}
main()