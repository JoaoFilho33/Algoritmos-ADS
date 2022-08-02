import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const A = Number(input('Informe um valor inicial: '))
    const limite = Number(input('Limite: '))
    const R = Number(input('Razão: '))

    let count = 0
    let pg = A
    while(count < limite){
        console.log(pg)
        pg += R
        count++
    }
}


main()