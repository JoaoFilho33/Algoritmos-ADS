import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const limite_inferior = Number(input('Limite inferior: '))
    const limite_superior = Number(input('Limite superior: '))

    let count = limite_inferior
    while (count <= limite_superior) {
        if(count % 2 === 0){
            console.log(count)
            count++
        }     
        else{
            count++
        }   
    }
}


main()